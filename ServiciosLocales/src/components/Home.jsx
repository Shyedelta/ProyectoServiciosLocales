import React, { useState } from 'react'
import Carrusel from './Carrusel'
import Categorias from './Categorias' 

function Home() { 

    return (
        <div>
            <div className='px-0'>
                <div className='px-10'>
                    <div className='banner mt-10 p-10 w-full h-[20em] shadow-lg bg-purple-300 text-white rounded-2xl flex '>
                        <div className='w-full h-full content-center align-middle items-center text-center'>Banner</div>
                    </div>
                    <Categorias />
                    <Carrusel />
                    <div className='relative bottom-96 flex justify-between flex-wrap flex-row'> 
                    </div>
 
                </div>
            </div>
        </div>
    )
}

export default Home