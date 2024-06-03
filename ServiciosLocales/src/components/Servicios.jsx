import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from "../components/Map";
import Categorias from "../components/Categorias";
import "../styles/style.css";
import json from "../db.json";
import Card from './Card.jsx';
import categorias from "../funciones/otros.js";
import default_img from "../assets/img.png";

function Servicios({ coords, setCoords }) {
  const [empresas, setEmpresas] = useState([]);
  const { categoria } = useParams();

  const obtenerDatos = async () => {
    try {
      const data = await json;
      setEmpresas(data.empresas);
    } catch (error) {
      console.error("Error al obtener los datos. ", error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  let empresasFiltradas = empresas.filter(empresa =>
    empresa.categorias.includes(categoria)
  );
  if (categoria == undefined) {
    empresasFiltradas = empresas;
  }


  return (
    <>
      <div className='bg-white border-x w-full h-full min-h-screen flex justify-start flex-col mx-auto'>
        {empresas.length > 0 && (
          <div className='pt-10'>
            <div className='py-0 overflow-hidden shadow-md h-[23em]'>
              <Map controlOff empresas={empresasFiltradas} coords={coords} />
            </div>
          </div>
        )}
        <Categorias />

        <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {empresasFiltradas.map((empresa) => {
            const imgURL = categorias.find((img) => img.nombre === empresa.categorias[0])?.img || default_img;
            return <Card key={empresa.id} empresa={empresa} imgURL={imgURL} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Servicios;
