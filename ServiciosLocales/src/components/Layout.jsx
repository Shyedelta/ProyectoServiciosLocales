import React from 'react'
import "../styles/style.css"
import Header from './Header'
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout({ coords = { coords }, setCoords = { setCoords } }) {

    return (
        <>
            <div className="layout max-w-screen overflow-hidden p-10 backgroundCustom h-screen ">
                <div className="border-4 border-white/20 bg-white/10 rounded-3xl mt-10 shadow-lg min-h-[20vh] h-screen max-h-[90vh] overflow-y-auto pt-0 flex flex-col justify-between overflow-x-auto">
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