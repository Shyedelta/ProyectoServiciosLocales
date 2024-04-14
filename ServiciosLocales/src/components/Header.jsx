import React, { useRef } from 'react'
import "../styles/style.css"
import MenuNav from './MenuNav'
import Star from './Star';

function Header({ setCoords }) {

  const contenedorRef = useRef(null);
  const scrollTo = (scrollOffset) => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className="bg-white/70 shadow-md  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="bottomCustom2 mx-auto self-center text-2xl tracking-wide w-max whitespace-nowrap dark:text-white 
            bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ">
              ServiciosLocales
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <Star text={"Explorar"} />
            <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="mx-auto sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <MenuNav setCoords={setCoords} />
    </>
  )
}

export default Header