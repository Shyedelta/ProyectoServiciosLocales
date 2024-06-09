import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from "../components/Map";
import Categorias from "../components/Categorias";
import "../styles/style.css";
import Card from './Card.jsx';
import categorias from "../funciones/categorias.js";
import default_img from "../assets/img.png";
import { motion, AnimatePresence } from 'framer-motion'
import { masterKey, jsonEmpresas } from '../funciones/constantes.js';

function Servicios({ coords }) {
  const [empresas, setEmpresas] = useState([]);
  const { categoria } = useParams();

  const obtenerDatos = async () => {
    try {
      const response = await fetch(jsonEmpresas, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': masterKey,
        },
      })
      const data = await response.json();
      setEmpresas(data.record.empresas)
    } catch (error) {
      console.error("Error al obtener los datos. ", error);
    };
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
      <div className='bg-white will-change-[top] border-x w-full h-full min-h-screen flex justify-start flex-col mx-auto'>
        {empresas.length > 0 && (
          <div className='pt-0'>
            <div className='py-0 overflow-hidden shadow-md h-[23em]'>
              <Map controlOff empresas={empresasFiltradas} coords={coords} />
            </div>
          </div>
        )}
        <Categorias />
        <AnimatePresence>

          <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10" >
            {empresasFiltradas.map((empresa, index) => {
              const imgURL = categorias.find((img) => img.nombre === empresa.categorias[0])?.img || default_img;
              return <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={empresa.id}
                transition={{ ease: "easeOut", delay: 0.2 * index }} >
                <Card empresa={empresa} imgURL={imgURL} />
              </motion.div>
            })}
          </div>
        </AnimatePresence>
      </div >
    </>
  );
}

export default Servicios;
