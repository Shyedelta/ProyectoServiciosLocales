import React, { useEffect, useState } from 'react';
import Map from "./Map.jsx"
import "../styles/style.css"
import otros from "../assets/otros.js"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
import json from "../db.json"

import { motion, useMotionValue, useTransform, animate } from "framer-motion";

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
      const coloresAleatorios = empresas.map(() => seleccionarColorFondo());
      setColoresAsignados(coloresAleatorios);
    }
  }, [empresas, coloresAsignados]);

  const seleccionarColorFondo = () => {
    const coloress = otros[0];
    return coloress[Math.floor(Math.random() * otros[0].length)];
  };

  const handleMouseEnter = (id) => {
    setActiveItem(id);
  }

  return (
    <div className="overflow-auto min-h-[max-content] scroll-smooth h-[45em]">
      {loading ? (
        <div className=" overflow-hidden flex  ">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="m-2 bg-purple-100 p-5 my-5 shadow-lg rounded-3xl aspect-square h-72 w-72 flex justify-center align-middle">
                <div className="loader w-max h-40 pt-32 ">
                  <div className="loader__circle"></div>
                  <div className="loader__circle"></div>
                  <div className="loader__circle"></div>
                  <div className="loader__circle"></div>
                  <div className="loader__circle"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {empresas ? (
            <Carousel responsive={otros[1]} className='z-[11]'>
              {empresas.slice(0, 10).map((empresa, index) => (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2 * index
                  }}   
                  whileInView={{ opacity: 1 }}
                  key={empresa.id} className="static h-[36em] z-[11] w-[17em]">
                  <div
                    className=" bg-slate-300 p-5 my-5 shadow-lg text-stone-800 rounded-3xl aspect-square h-64 w-64"
                    style={{ backgroundImage: coloresAsignados[index] }}
                    onMouseEnter={() => handleMouseEnter(empresa.id)}
                  >
                    {activeItem !== empresa.id && (
                      <h2 className="text-center relative color-[initial] text-white drop-shadow-sm blur-[0.5px] text-1xl h-full flex items-center justify-center animate-pulse">
                        <div className="tracking-in-expand uppercase text-2xl ">{empresa.NameNegocio}</div>
                      </h2>
                    )}
                    {activeItem === empresa.id && (
                      <div className="e-card relative playing text-nowrap -translate-y-[6.2em]">
                        <div className="image"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="infotop scale-in-top delay-1">
                          {empresa.NameNegocio}
                          <div className='font-light tracking-wide'>{empresa.TipoServicio}</div>
                          <div className="name uppercase">{empresa.NombreEmprendedor}</div>
                          <Link to={"/servicios/id/" + empresa.id} >
                            <button className="buttonCustom my-8 cursor-pointer">VER MÁS</button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  {activeItem === empresa.id && empresa.Ubicacion && (
                    <div className="scale-in-top relative right-2 top-1 z-50" onMouseLeave={() => setActiveItem(null)}>
                      <div className="bg-white p-4 shadow-lg rounded-3xl aspect-square max-w-[17em] z-50 min-w-[17em] scroll-smooth md:scroll-auto">
                        <Map empresa={empresa} />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </Carousel>

          ) : (<div>No hay datos aun...</div>)}
        </>
      )}

    </div>
  );
}

export default Carrusel;
