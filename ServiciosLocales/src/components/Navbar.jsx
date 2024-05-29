import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ openMenu,setOpenMenu }) {
    const handleClick = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <div className=" bg-white">
            <div className="hidden lg:block md:w-auto sm:hidden" id="navbar-dropdown">
                <div className="content-end place-content-center font-medium">
                    <ul className="grid grid-cols-3 gap-4 h-[4em] px-3 items-center">
                        <li className="px-2 h-full flex justify-center items-center border border-transparent hover:border-b-purple-500 ">
                            <Link to={"/"} className="w-full flex justify-center">
                                <p className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center rounded">
                                    Inicio
                                </p>
                            </Link>
                        </li>
                        <li onClick={handleClick}  className="px-2 h-full flex justify-center items-center border border-transparent hover:border-b-purple-500">
                            <p className="cursor-pointer text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center rounded">
                                <span className="flex items-center">
                                    Servicios
                                    <svg className={`${openMenu && " rotate-180"} ml-1 h-7 text-purple-500`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </p>
                        </li>
                        <li className="px-2 h-full flex justify-center items-center border border-transparent hover:border-b-purple-500">
                            <Link to={"/contact"} className="w-full flex justify-center">
                                <p className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center rounded">
                                    Contacto
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
