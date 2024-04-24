import React, { useRef, useState } from 'react'
import "../styles/style.css"
import Star from './Star';

function Header({ coords, setCoords }) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <>
      <nav className="bg-white/70 shadow-md  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 200 200" version="1.1" >
              <path fill="url(&quot;#SvgjsLinearGradient1001&quot;)" d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"></path>
              <defs>
                <linearGradient gradientTransform="rotate(0 0.5 0.5)" id="SvgjsLinearGradient1001">
                  <stop stopOpacity=" 1" stopColor="rgba(105, 234, 203)" offset="0"></stop>
                  <stop stopOpacity=" 1" stopColor="rgba(234, 204, 248)" offset="0.48"></stop>
                  <stop stopOpacity=" 1" stopColor="rgba(102, 84, 241)" offset="1"></stop>
                </linearGradient>
              </defs>
            </svg>
            <span className="bottomCustom2 min-w-[8em] mx-auto self-center text-2xl tracking-wide w-max whitespace-nowrap dark:text-white 
            bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:tracking-normal text-center">
              ServiciosLocales
            </span>
          </a>

          {/* <div className='hidden lg:block md:hidden'>
            <form className="max-w-md mx-auto w-[40em]  ">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="ml-1 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" className="hover:shadow-lg transition duration-500 ease-in-out block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca personas, negocios..." required />
                <button type="submit" className="text-white absolute end-0 bottom-[1px] bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-full text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Buscar
                </button>
              </div>
            </form>
          </div> */}

          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class={`flex flex-col font-medium p-4 md:p-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row `}>
              <li>
                <a href="#" class={`text-gray-900 hover:text-blue-700 `}>Home </a>
              </li>
              <li>
                <button onClick={handleClick} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
                <div onMouseLeave={handleClick} id="dropdownNavbar" class={`z-10 ${openMenu ? 'absolute' : 'hidden'} top-14  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" class="text-gray-900 rounded hover:text-blue-700">Services</a>
              </li>
              <li>
                <a href="#" class="text-gray-900 rounded hover:text-blue-700">Pricing</a>
              </li>
              <li>
                <a href="#" class="text-gray-900 rounded hover:text-blue-700">Contact</a>
              </li>
            </ul>
          </div>




          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <Star text={"Explorar"} />
          </div>
        </div>
      </nav>

      {/* <MenuNav setCoords={setCoords} /> */}

    </>
  )
}

export default Header