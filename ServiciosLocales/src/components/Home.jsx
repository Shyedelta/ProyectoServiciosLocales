import React from 'react'
import Carrusel from './Carrusel'
import Categorias from './Categorias'
import Tarjeta from './Tarjeta'

function Home() {
    return (
        <div>
            <div className=' px-5'>
                <Categorias />
                <Carrusel /*coords={coords} setCoords={setCoords}*/ />
                <div className='relative bottom-96 flex justify-between flex-wrap flex-row'>
                    <Tarjeta />
                    <Tarjeta />
                    <Tarjeta />
                    <Tarjeta />
                    <Tarjeta />
                </div>
            </div>
        </div>
    )
}

export default Home