import React, { useEffect, useRef, useState } from 'react';
import categorias from "../funciones/otros.js";
import "../styles/style.css";
import { Link, useLocation } from 'react-router-dom';
import json from "../db.json";
import { motion, AnimatePresence } from "framer-motion";

function Categorias() {
    const contenedorRef = useRef(null);
    const [empresas, setEmpresas] = useState([]);
    const location = useLocation();

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
    const isServiciosPath = /^\/servicios\/.+/;

    return (
        <div className='p-10 pt-0'>
            <div className='flex justify-between '>
                <button className='hover:opacity-100 opacity-10 ml-[1em] hover:scale-110 bg-black/70 p-[0.2em] rounded-full relative top-[3em] z-10' onClick={() => scrollTo(-150)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button className='hover:opacity-100 opacity-10 mr-[1em] hover:scale-110 bg-black/70 p-[0.2em] rounded-full relative top-[3em] z-10' onClick={() => scrollTo(150)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </button>
            </div>
            <div ref={contenedorRef} className='flex px-5 py-3 text-gray-700 overflow-hidden border border-gray-200 rounded-lg bg-white/20'>
                {isServiciosPath.test(location.pathname) && (
                    <span className={`z-auto mx-1 py-1 mt-[2px] active:opacity-70 transition text-center h-max min-w-[10em] border-b-2 border-transparent overflow-hidden hover:border-b-black/30 hover:border-b-2 text-sm font-medium me-2 cursor-pointer`}>
                        <Link to="/servicios">
                            <p className='h-full font-bold'>Todas</p>
                        </Link>
                    </span>
                )}
                {categorias.map((c, index) => (
                    <span
                        key={index}
                        className={`z-auto mx-1 py-1 mt-[2px] active:opacity-70 transition text-center h-max min-w-[10em] border-b-2 border-transparent overflow-hidden hover:border-b-black/30 hover:border-b-2 text-sm font-medium me-2 cursor-pointer`}
                    >
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }} 
                                transition={{ delay: 0.2 * index }}
                            >
                                <Link to={empresas.length > 0 ? `/servicios/${c.nombre || ""}` : "/servicios"}>
                                    <motion.p
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        className='h-full line-clamp-1'>{c.nombre}</motion.p>
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Categorias;
