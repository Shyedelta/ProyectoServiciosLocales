import React from 'react'

function Banner() {
    return (
        <div className='banner mt-10 p-5 w-full h-[20em] shadow-lg bg-purple-400 text-white rounded-2xl flex '>
            <div className='w-full h-full content-center align-middle items-center overflow-hidden'>
                <div className='w-1/2 h-full font-bold text-4xl tracking-wide flex flex-col justify-between'>
                    <p>¡No esperes más!<br />Contacta con los más cercanos</p>

                    <p className='line-clamp-3 text-lg font-normal mt-4'>
                        Eliminamos demoras y complicaciones, priorizando la comodidad del usuario.
                        Promovemos la colaboración y la accesibilidad entre comunidades, facilitando el bienestar de todos los involucrados.
                    </p>
                    <button className=" lg:opacity-100 md:opacity-0 justify-items-end mt-5 w-max relative bottom-0 left-0 inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-r from-purple-600/50 to-blue-500/50 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-purple-400/40 ">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                            Ver más
                        </span>
                        <svg className="mr-5 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner