import React, { useState, useEffect, useRef } from 'react'
import "../styles/style.css"
import Carrusel from './Carrusel'
import Header from './Header'
import Footer from './Footer';
import Categorias from './Categorias';
import Tarjeta from './Tarjeta'; 
function Layout() {
    const [coords, setCoords] = useState(null);
    return (
        <>
            <div className="layout p-10 backgroundCustom h-screen transition transform motion-reduce:transition-none motion-reduce:hover:transform-none">
                <div className="bg-white/50 rounded-3xl p-10 shadow-lg min-h-[20vh] h-screen max-h-[85vh] overflow-y-auto mt-14 pt-0 flex flex-col justify-between">
                    <Header setCoords={setCoords} />
                    <div className=' px-5'>
                        <Categorias />
                        <Carrusel coords={coords} setCoords={setCoords} />
                        <div className='relative bottom-96 flex justify-between flex-wrap flex-row'>
                            <Tarjeta />
                            <Tarjeta />
                            <Tarjeta />
                            <Tarjeta />
                            <Tarjeta />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout