import React, { useEffect, useState } from 'react';
import Map from "../components/Map";
import "../styles/style.css";
import json from "../db.json";

function Servicios({ coords, setCoords }) {
  const [empresas, setEmpresas] = useState([]);

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

  return (
    <div className='mx-10'>
      {empresas.length > 0 &&
        <div className='pt-10'>
          <div className='py-0 overflow-hidden shadow-lg rounded-2xl h-[23em]'>
            <Map controlOff empresas={empresas} coords={coords} />
          </div>
        </div>
      }
    </div>
  );
}

export default Servicios;
