import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import BotonPerfil from './BotonPerfil';
import Star from './Star';
import { Link } from 'react-router-dom'
import CategoriasNavBar from './CategoriasNavBar';

function Header({ userActive }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md  sticky  w-full z-50 top-0 start-0 border-gray-200 ">
        <div className="px-20 flex flex-wrap items-center justify-between mx-auto  h-[4em]">

          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="bottomCustom2 min-w-[8em] mx-auto self-center text-2xl tracking-wide w-max whitespace-nowrap dark:text-white  bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:tracking-normal text-center">
              ServiciosLocales
            </span>
          </a>

          <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
          {userActive != null ? (
            <BotonPerfil userActive={userActive} />
          ) : (
            <Link to={"/login"} >
              <Star text={"Iniciar sesión"} />
            </Link>
          )}
          {openMenu && <CategoriasNavBar setOpenMenu={setOpenMenu} />}
        </div>
      </nav>
    </>
  )
}

export default Header