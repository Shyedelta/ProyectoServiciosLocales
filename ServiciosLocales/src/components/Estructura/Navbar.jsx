import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navbar({ openMenu, setOpenMenu }) {
    const hoverNavbar = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <div className="">
            <div className="hidden text-lg lg:block md:w-auto sm:hidden" id="navbar-dropdown">
                <div className="content-end place-content-center font-medium">
                    <ul className="grid grid-cols-3 gap-4 h-[4em] px-3 items-center tracking-wider">
                        <li className="px-2 h-full max-h-[3.5em] flex justify-center items-center border border-transparent hover:border-b-amber-700 ">
                            <Link to={"/"} className="w-full flex justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className=" text-transparent bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-center rounded">
                                    Inicio
                                </motion.div>
                            </Link>
                        </li>
                        <li onMouseEnter={hoverNavbar} className="w-full px-4 h-full max-h-[3.5em] flex justify-center items-center border border-transparent hover:border-b-amber-700 ">
                            <div className="  min-w-[8em] mx-auto cursor-pointer text-transparent bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-center rounded">
                                <motion.div
                                    whileHover={{ scale: 1.2 }} 
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className="flex justify-center items-center">
                                    Servicios
                                    <svg className={`${openMenu && " rotate-180"} ml-1 h-7 text-amber-600`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </motion.div>
                            </div >
                        </li>
                        <li className="px-2 h-full max-h-[3.5em] flex justify-center items-center border border-transparent hover:border-b-amber-700 ">
                            <Link to={"/contact"} className="w-full flex justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className="text-transparent bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-center rounded">
                                    Contacto
                                </motion.div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
