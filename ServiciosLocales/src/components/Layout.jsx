import React from 'react'
import "../styles/style.css"
import Header from './Header'
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout({ coords = { coords }, setCoords = { setCoords } }) {

    return (
        <>
            <div className="layout max-w-screen overflow-hidden p-5 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 h-screen ">
                <div className="border-4 border-white/10 bg-white/40 rounded-3xl shadow-lg min-h-[20vh] h-screen max-h-[95vh] overflow-y-auto flex flex-col justify-between overflow-x-auto">
                    <Header coords={coords} setCoords={setCoords} />
                    <div className='flex justify-start flex-col'>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout