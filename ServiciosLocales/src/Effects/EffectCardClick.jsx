import React from 'react'
import { Link } from 'react-router-dom'

function EffectCardClick({empresa}) {
    return (
        <div className="e-card relative playing text-nowrap -translate-y-[6.2em]">
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop scale-in-top delay-1">
                {empresa.name}
                <div className='font-light tracking-wide'>{empresa.servicio}</div>
                <div className="name uppercase">{empresa.emprendedor}</div>
                <Link to={"/servicio/id/" + empresa.id} >
                    <button className="buttonCustom my-8 cursor-pointer">VER MÁS</button>
                </Link>
            </div>
        </div>
    )
}

export default EffectCardClick