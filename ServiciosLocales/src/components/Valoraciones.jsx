import React from 'react'

function Valoraciones({empresa}) {
    return (
        <div>
            <div className="bg-black/60 flex-col shadow-md rounded-xl absolute inset-0 flex items-center justify-center pointer-events-none">
                {empresa && <p className='text-center text-white text-[4vw] px-5 font-extralight tracking-widest'>{empresa.nombre}</p>}
                <div className="relative flex items-center">
                    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    {empresa && <p className="ms-2 text-sm font-bold text-white">{(empresa.rating * 1.12).toFixed(2)}</p>}
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    {empresa && <a href="#" className="text-sm font-medium underline hover:no-underline text-white">{(empresa.rating * 3.32).toFixed(0)} valoraciones</a>}
                </div>
            </div>
        </div>
    )
}

export default Valoraciones