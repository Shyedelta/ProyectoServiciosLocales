import React from 'react'
import { Link } from 'react-router-dom'

function EffectCardClick({empresa}) {
    return (
        <div className="e-card relative playing text-nowrap -translate-y-[6.2em]">
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="text-center text-[15px] absolute p-[0.5em] top-[3em] left-0 right-0 font-[600] text-white overflow-hidden text-ellipsis scale-in-top delay-1">
                {empresa.nombre}
                <div className='font-light tracking-wide'>{empresa.servicio}</div>
                <div className="text-[14px] font-medium relative top-[1em] uppercase">{empresa.propietario}</div>
                <Link to={"/servicio/id/" + empresa.id} >
                    <button className="buttonCustom my-8 cursor-pointer">VER MÁS</button>
                </Link>
            </div>
        </div>
    )
}

export default EffectCardClick