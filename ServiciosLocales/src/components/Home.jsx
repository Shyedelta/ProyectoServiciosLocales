import React from 'react'
import Carrusel from './Carrusel'
import Categorias from './Categorias'
import Banner from './Banner'

function Home() {

    return (
        <div>
            <div>
                <div className='px-10'>
                    <Banner />
                    <Categorias />
                    <Carrusel />
                    <div className='relative bottom-96 flex justify-between flex-wrap flex-row'>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Home