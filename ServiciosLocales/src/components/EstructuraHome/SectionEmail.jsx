import React from 'react';
import { Link } from 'react-router-dom';

function SectionEmail() {
    return (
        <div className='overflow-hidden'>
            <section className="bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <Link to="/register" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200">
                        <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">Nuevo</span>
                        <span className="text-sm font-medium">¡Se implemento un chat para los servicios! Vea qué hay de nuevo</span>
                        <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </Link>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Únete a nosotros y descubre tu potencial</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Regístrate para ser parte de nuestra comunidad donde la tecnología, la innovación y el crecimiento están a la vanguardia. No te pierdas las últimas actualizaciones y oportunidades.</p>
                    <form className="w-full max-w-md mx-auto">
                        <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only">Correo electrónico</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                            </div>
                            <input type="email" id="default-email" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Ingresa tu correo aquí..." required />
                            <Link to="/register" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Regístrame</Link>
                        </div>
                    </form>
                </div>
                <div className="bg-gradient-to-b from-blue-50 to-transparent w-full h-full relative top-0 left-0 z-0"></div>
            </section>
        </div>
    );
}

export default SectionEmail;
