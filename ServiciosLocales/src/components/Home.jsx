import React from 'react'
import Carrusel from './Carrusel'
import Categorias from './Categorias'
import Tarjeta from './Tarjeta'
function Home() {
    return (
        <div>
            <div className='px-0'>
                {/* <div className='relative bottom-0 border border-red-500 max-h-[22em]'>
                    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className=" transition duration-300 ease-in-out delay-150">
                        <defs>
                            <linearGradient id="gradient" x1="100%" y1="54%" x2="0%" y2="46%">
                                <stop offset="5%" stopColor="#9900ef"></stop>
                                <stop offset="95%" stopColor="#0693e3"></stop>
                            </linearGradient>
                        </defs>
                        <path d="M 0,400 L 0,150 C 124,173.2 248,196.4 423,187 C 598,177.6 824,135.6 1002,124 C 1180,112.4 1310,131.2 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
                    </svg>
                </div> */}
                <div className='px-10'>
                    <Categorias />
                    <Carrusel />
                    <div className='relative bottom-96 flex justify-between flex-wrap flex-row'>
                        <Tarjeta />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home