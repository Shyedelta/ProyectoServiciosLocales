import React, { useRef } from 'react';
import otros from "../assets/otros.js";
import "../styles/style.css";

function Categorias() {
    const contenedorRef = useRef(null);

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
                        <p className='relative -top-[0.2em]'>{c.nombre}</p>
                    </span>
                ))}
            </div>
            
        </div>
    );
}

export default Categorias;
