import React from 'react'
import {Link} from "react-router-dom"
function InfoService({ empresa }) {
    return (
        <>
            <div className="bg-gray-200 h-10 py-5 flex items-center justify-around w-full">
                <div className=' flex'>
                    {empresa?.categorias.map((categoria, index) => (
                        <Link key={index} to={"/servicios/" + categoria}>
                            <p className='mx-3 bg-white/80 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full '>{categoria}</p>
                        </Link>
                    ))}
                </div>
                <div className='flex'>
                    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="mr-4 text-sm font-bold ">{(empresa?.rating)}</p>
                    <a href="#" className="text-sm font-medium underline hover:no-underline ">{(empresa?.rating ? (empresa.rating * 3.32).toFixed(0) : '0')} valoraciones</a>
                </div>
            </div>
        </>
    )
}

export default InfoService