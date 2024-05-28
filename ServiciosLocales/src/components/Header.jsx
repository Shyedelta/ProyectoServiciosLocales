import React, { useEffect } from 'react'
import Navbar from './Navbar';
import BotonPerfil from './BotonPerfil';
import Star from './Star';

function Header({ userActive }) {
  return (
    <>
      <nav className="bg-white/90 shadow-md dark:bg-gray-900 sticky  w-full z-50 top-0 start-0 border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-5 h-[4em]">

          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="bottomCustom2 min-w-[8em] mx-auto self-center text-2xl tracking-wide w-max whitespace-nowrap dark:text-white  bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:tracking-normal text-center">
              ServiciosLocales
            </span>
          </a>

          <Navbar />
          {userActive != null ? (
            <BotonPerfil userActive={userActive}/>
          ) : (
            <a href="/register">
              <Star text={"Iniciar sesión"} />
            </a>
          )}

        </div>
      </nav>
    </>
  )
}

export default Header