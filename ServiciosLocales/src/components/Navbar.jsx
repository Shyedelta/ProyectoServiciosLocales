import React from 'react'
import { useLocation } from 'react-router-dom';

function Navbar({ openMenu, handleClick }) {
    const { path } = useLocation();
    return (
        <div>
            <div className="hidden w-max lg:block md:w-auto sm:hidden" id="navbar-dropdown ">
                <ul className={`flex flex-col font-medium p-0 md:p-0 rounded-lg md:space-x-3 rtl:space-x-reverse md:flex-row `}>
                    <a href="/">
                        <li className='border-b-transparent border-b-2 hover:border-purple-500/50 active:border-purple-500/50 flex flex-col justify-center h-[4em]  px-3'>
                            <p className={`mx-auto self-center tracking-wide w-max text-transparent bg-gradient-to-r from-purple-500 to-blue-500  bg-clip-text  text-center  `}>
                                Inicio
                            </p>
                        </li>
                    </a>
                    <li className='hover:border-black border-b-transparent border-b-2 hover:border-purple-500/50 active:border-purple-500/50 flex flex-col justify-center h-[4em]'>
                        <button onClick={handleClick} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3  bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center rounded hover:bg-gray-100  ">
                            <p className='text-transparent'>Dropdown</p>
                            <svg className="text-purple w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="#3455ebab" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div onMouseLeave={handleClick} id="dropdownNavbar" className={`z-10 ${openMenu ? 'absolute' : 'hidden'} top-[4.5em] font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Configuracion</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </div>
                        </div>
                    </li>
                    <a href="#" >
                        <li className='border-b-transparent border-b-2 hover:border-purple-500/50 active:border-purple-500/50 flex flex-col justify-center h-[4em]  px-3'>
                            <p className='text-transparent bg-gradient-to-r from-purple-500 to-blue-500  bg-clip-text  text-center rounded '>
                                Servicios
                            </p>
                        </li>
                    </a>
                    <a href="#" >
                        <li className='border-b-transparent border-b-2 hover:border-purple-500/50 active:border-purple-500/50 flex flex-col justify-center h-[4em]  px-3'>
                            <p className='text-transparent bg-gradient-to-r from-purple-500 to-blue-500  bg-clip-text  text-center rounded '>
                                Contacto
                            </p>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar