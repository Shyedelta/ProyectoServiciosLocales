import React from 'react'
import defaultImg from "../assets/img.png"
function Card({ empresa, imgURL }) {
    return (
        <div>
            {empresa &&
                <div className="max-w-sm min-h-[30em] bg-white group overflow-hidden border-gray-200 rounded-lg shadow ">
                    <img className="w-full h-[15em] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        src={imgURL} alt="" />
                    <div className="p-5 h-[15em] flex flex-col justify-around">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{empresa.nombre}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 line-clamp-3">{empresa.faq[0].parrafos[0]}</p>
                        <a href={`/servicio/id/${empresa.id}`} className="inline-flex w-max items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Ver más
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            }
        </div>
    )
}

export default Card