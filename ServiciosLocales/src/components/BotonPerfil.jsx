import React, { useState } from 'react'
import defaultImg from "../imgs/default.jpg"

function BotonPerfil({ userActive }) {
    const [openMenu, setOpenMenu] = useState(false);
    const handleClick = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <li className='hover:border-black border-b-transparent border-b-2 max-w-[2.5em] hover:border-purple-500/50 active:border-purple-500/50 flex flex-col justify-center h-[4em]'>
            <button onClick={handleClick} type="button" className={`${openMenu ? 'relative' : 'block'} top-24 w-max h-max flex text-sm bg-gray-400 rounded-full ring-gray-300 ring-4 hover:ring-gray-400 `} aria-expanded="false" >
                <img className="w-10 h-10 rounded-full opacity-90" src={defaultImg} alt="user image" />
            </button>
            <div onMouseLeave={handleClick} className={`${openMenu ? 'relative' : 'hidden'} z-10 top-[7em] right-[8em] font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <div className='ml-4 py-2 text-sm line-clamp-2 text-gray-700 text-clip w-32 '>
                    <p>{userActive.name}<br /></p>
                    <p className=' text-gray-400'>{userActive.email}<br /></p>

                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                        {userActive && userActive.name == "admin" ? (
                            <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
                        ) : (
                            <a href="/misservicios" className="block px-4 py-2 hover:bg-gray-100 ">Mis servicios</a>
                        )}
                    </li>
                    <li>
                        <a href="/config" className="block px-4 py-2 hover:bg-gray-100 ">Configuración</a>
                    </li>

                </ul>
                <div className="py-1">
                    <a href="#" onClick={() => { localStorage.clear(); window.location.reload() }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Cerrar sesión</a>
                </div>
            </div>
        </li>)
}

export default BotonPerfil