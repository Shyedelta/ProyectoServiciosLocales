import React, { useEffect, useRef, useState } from 'react';
import otros from "../funciones/otros.js";
import "../styles/style.css";
import { Link } from 'react-router-dom';
import json from "../db.json"
import { motion, AnimatePresence } from "framer-motion";

function categorias() {
    const contenedorRef = useRef(null);
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                setEmpresas(json.empresas);
            } catch (error) {
                console.error("Error al obtener los datos. ", error);
            }
        };
        obtenerDatos();
    }, []);

    const scrollTo = (scrollOffset) => {
        if (contenedorRef.current) {
            contenedorRef.current.scrollBy({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div>
            <div className='flex justify-between '>
                <button className='hover:opacity-100 opacity-20 ml-[0.3em] hover:scale-110 bg-black/70 p-[0.2em] rounded-full relative top-[3.35em] z-10' onClick={() => scrollTo(-150)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button className='hover:opacity-100 opacity-20 mr-[0.3em] hover:scale-110 bg-black/70 p-[0.2em] rounded-full relative top-[3.35em] z-10' onClick={() => scrollTo(150)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </button>
            </div>
            <div ref={contenedorRef} className='bg-white/20 shadow-lg p-1 rounded-full  my-3 overflow-hidden flex content-center align-middle flex-nowrap max-h-11 h-11'>
                {otros[2].map((c, index) => (
                    <span
                        key={index}
                        className={`z-auto mx-1 py-1 mt-[2px] shadow-lg active:opacity-70 transition text-center h-max min-w-[10em]  overflow-hidden border-2 border-black/10 hover:outline  outline-2 ${c.color} ${c.text} text-sm font-medium me-2 rounded-2xl cursor-pointer `}
                    >
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.2 * index }}
                            >
                                {/* <Link to={empresas.length > 0 ? "/servicio/id/" + (empresas.find(x => x.categorias[0] == c.nombre || x.categorias[1] == c.nombre)?.id || "") : "/"}> */}
                                <Link to={empresas.length > 0 ? "/servicios/" + (c.nombre || "") : "/"}>
                                    <p className='h-full line-clamp-1'>{c.nombre}</p>
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                        
                    </span>
                ))}
            </div>
        </div >
    );
}

export default categorias;
