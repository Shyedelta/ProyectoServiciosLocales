import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import BotonPerfil from './BotonPerfil';
import { Link } from 'react-router-dom'
import CategoriasNavBar from './CategoriasNavBar';
import logoColor from '../../imgs/logocolor.png'
import { motion } from 'framer-motion'

function Header({ userActive }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className=" select-none shadow-md  sticky  w-full z-50 top-0 start-0 bg-gray-800 backdrop-blur-xl border-gray-600">
        <div className="px-2 md:px-20 grid grid-cols-3 place-content-center align-middle mx-auto h-[4em]">
          <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="min-w-[8em] mx-auto self-center text-2xl tracking-wide w-max whitespace-nowrap  bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:tracking-normal text-center">
              <img src={logoColor} alt="Logo ServiciosLocales" className='w-52' />
            </span>
          </Link>

          <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div className='grid place-content-center'>
            {userActive != null ? (
              <div className='flex'>
                {userActive.email != 'admin2@gmail.com' &&
                  <Link className='flex flex-col justify-center p-1 mx-5 cursor-pointer text-gray-500 hover:text-blue-600' to={"/inbox"}>
                    <svg className='my-auto' width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V12M3 12H6.67452C7.16369 12 7.40829 12 7.63846 12.0553C7.84254 12.1043 8.03763 12.1851 8.21657 12.2947C8.4184 12.4184 8.59136 12.5914 8.93726 12.9373L9.06274 13.0627C9.40865 13.4086 9.5816 13.5816 9.78343 13.7053C9.96237 13.8149 10.1575 13.8957 10.3615 13.9447C10.5917 14 10.8363 14 11.3255 14H12.6745C13.1637 14 13.4083 14 13.6385 13.9447C13.8425 13.8957 14.0376 13.8149 14.2166 13.7053C14.4184 13.5816 14.5914 13.4086 14.9373 13.0627L15.0627 12.9373C15.4086 12.5914 15.5816 12.4184 15.7834 12.2947C15.9624 12.1851 16.1575 12.1043 16.3615 12.0553C16.5917 12 16.8363 12 17.3255 12H21M3 12L5.32639 6.83025C5.78752 5.8055 6.0181 5.29312 6.38026 4.91755C6.70041 4.58556 7.09278 4.33186 7.52691 4.17615C8.01802 4 8.57988 4 9.70361 4H14.2964C15.4201 4 15.982 4 16.4731 4.17615C16.9072 4.33186 17.2996 4.58556 17.6197 4.91755C17.9819 5.29312 18.2125 5.8055 18.6736 6.83025L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                  </Link>
                }
                <BotonPerfil userActive={userActive} />
              </div>
            ) : (
              <Link to={"/login"} >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="grid min-w-[8em] my-auto self-center text-xl tracking-wider w-max whitespace-nowrap  bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent text-center">
                  Iniciar sesión
                </motion.div>
              </Link>
            )}
          </div>
          {openMenu && <CategoriasNavBar setOpenMenu={setOpenMenu} />}
        </div>
      </nav>
    </>
  )
}

export default Header