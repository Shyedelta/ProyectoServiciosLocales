import React from 'react';
import defaultImg from "../assets/img.png";
import { Link } from 'react-router-dom';

function Card({ empresa, imgURL }) {
    return (
        <div>
            {empresa && (
                <div className="min-h-[30em] bg-gray-50 group overflow-hidden border-gray-200 rounded-lg shadow">
                    <div className="relative">
                        {empresa.verificado && (
                            <span className="absolute top-2 right-2 z-40 inline-flex items-center justify-center w-6 h-6 text-sm font-semibold text-green-700 bg-green-100 border border-green-700 rounded-full">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" >
                                    <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z" />
                                    <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z" />
                                </svg>
                            </span>
                        )}
                        <img src={imgURL || defaultImg} alt={`Imagen de ${empresa.nombre}`}
                            className="w-full h-[15em] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
                    </div>

                    <div className="p-5 h-[15em] flex flex-col justify-around">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{empresa.nombre}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 line-clamp-3">
                            {empresa.faq[0].parrafos[0]}
                        </p>
                        <Link
                            to={`/servicio/id/${empresa.id}`}
                            className="inline-flex w-max items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                            Ver más
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
