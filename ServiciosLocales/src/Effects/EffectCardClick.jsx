import React from 'react'
import { Link } from 'react-router-dom'

function EffectCardClick({ categoria }) {
    return (
        <div className="flex flex-col text-center text-[15px] text-white overflow-hidden text-ellipsis scale-in-top delay-1">
            {categoria.nombre}
            <Link to={"/servicios/" + categoria.nombre} >
                <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-900 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">VER MÁS</button>
            </Link>
        </div>
    )
}

export default EffectCardClick