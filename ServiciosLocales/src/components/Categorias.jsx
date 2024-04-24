import React, { useEffect, useRef, useState } from 'react';
import otros from "../assets/otros.js";
import "../styles/style.css";
import { Link } from 'react-router-dom';
import json from "../db.json"
import { motion, AnimatePresence, delay } from "framer-motion";

function Categorias() {
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
                <button className='hover:opacity-100 opacity-20 ml-2 hover:scale-125 bg-black/70 p-[0.2em] rounded-full relative top-[3.08em] z-10' onClick={() => scrollTo(-100)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button className='hover:opacity-100 opacity-20 mr-[0.5em] hover:scale-125 bg-black/70 p-[0.2em] rounded-full relative top-[3.08em] z-10' onClick={() => scrollTo(100)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </button>
            </div>
            <div ref={contenedorRef} className='backgroundCustom shadow-lg p-1 rounded-full  my-3 overflow-hidden flex justify-content-center align-middle flex-nowrap max-h-11 h-11'>
                {otros[2].map((c, index) => (
                    <span
                        key={index}
                        className={`z-auto mx-1 shadow-lg active:opacity-70 hover:-translate-y-[0.15em] transition  text-center max-h-7 min-w-[10em] text-base overflow-hidden border-2 border-black/10 hover:outline outline-offset-0 outline-2 ${c.color} ${c.text} text-sm font-medium me-2 px-2.5 py-1 my-auto rounded-2xl cursor-pointer `}
                    >
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Link to={empresas.length > 0 ? "/servicios/id/" + (empresas.find(x => x.Categorias[0] == c.nombre || x.Categorias[1] == c.nombre)?.id || "") : "/"}>
                                    <p className='tracking-in-expand relative -top-[0.2em]'>{c.nombre}</p>
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </span>
                ))}
            </div>
        </div >
    );
}

export default Categorias;
