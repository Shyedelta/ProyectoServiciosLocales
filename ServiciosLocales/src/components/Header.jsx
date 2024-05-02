import React, { useRef, useState } from 'react'
import "../styles/style.css"
import Star from './Star';
import Navbar from './Navbar';
import useTypingEffect from "../Effects/useTypingEffect.jsx"
function Header({ coords, setCoords }) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  }
  const titleEffect = useTypingEffect(
    "ServiciosLocales", 100, true
  );
  return (
    <>
      <nav className="bg-white/70 shadow-md dark:bg-gray-900 sticky  w-full z-50 top-0 start-0 border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-5 h-[4em]">

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
            <span className="bottomCustom2 min-w-[8em] mx-auto self-center text-2xl tracking-wide w-max whitespace-nowrap dark:text-white  bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:tracking-normal text-center">
              {titleEffect}
            </span>
          </a>

          <Navbar openMenu={openMenu} handleClick={handleClick} />
          <Star text={"Explorar"} />
        </div>
      </nav>
    </>
  )
}

export default Header