import React, { useEffect, useState } from 'react';
import Map from "./Map.jsx"
import "../styles/style.css"
import otros from "../funciones/otros.js"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import json from "../db.json"
import { motion } from "framer-motion";
import SkeletonCarrusel from '../skeleton/SkeletonCarrusel.jsx';
import EffectCardClick from '../Effects/EffectCardClick.jsx';

function Carrusel() {
  const [empresas, setEmpresas] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [coloresAsignados, setColoresAsignados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await json;
        setEmpresas(data.empresas);
      } catch (error) {
        console.error("Error al obtener los datos. ", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    obtenerDatos();

  }, []);

  useEffect(() => {
    if (empresas.length > 0 && coloresAsignados.length === 0) {
      const coloresAleatorios = empresas.map(seleccionarColorFondo);
      setColoresAsignados(coloresAleatorios);
    }
  }, [empresas, coloresAsignados]);

  const seleccionarColorFondo = () => {
    const coloress = otros[0];
    return coloress[Math.floor(Math.random() * otros[0].length)];
  };

  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="overflow-auto min-h-[max-content] scroll-smooth h-[45em]">
      {loading ? (
        <SkeletonCarrusel />
      ) : (
        empresas ? (
          <Carousel responsive={otros[1]} className='z-[11] '>
            {empresas.slice(0, 10).map((empresa, index) => {
              const isActive = activeItem === empresa.id;
              return (
                <motion.div
                  key={empresa.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ stiffness: 260, damping: 20, delay: 0.2 * index }}
                  whileInView={{ opacity: 1 }}
                  className=" first:ml-5 static h-[36em] z-[11] w-[17em]"
                >
                  <div
                    className={` active:-scale-[0.97] active:rotate-180 cursor-pointer bg-slate-300 p-5 my-5 shadow-xl text-stone-800 rounded-3xl aspect-square h-64 w-64`}
                    style={{ backgroundImage: coloresAsignados[index] }}
                    onClick={() => handleClick(empresa.id)}
                  >
                    {!isActive && (
                      <h2 className="pointer-events-none text-center relative color-[initial] text-white drop-shadow-sm blur-[0.5px] text-1xl h-full flex items-center justify-center ">
                        <div className="uppercase text-2xl">{empresa.name}</div> 
                      </h2>
                      // tracking-in-expand
                    )}
                    {isActive && <EffectCardClick empresa={empresa} />}
                  </div>
                  <div className={`${isActive && empresa.ubicacion ? "block" : "hidden"} scale-in-top relative right-2 top-1 z-50`} onMouseLeave={() => setActiveItem(null)}>
                    <div className="bg-white p-3 shadow-lg rounded-3xl aspect-square max-w-[17em] z-50 min-w-[17em] scroll-smooth md:scroll-auto">
                      <Map empresa={empresa} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </Carousel>
        ) : <div>No hay datos aún...</div>
      )}
    </div>
  );
}

export default Carrusel;

