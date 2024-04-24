import React from 'react'
import "../styles/style.css"
import Header from './Header'
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
function Layout({ coords = { coords }, setCoords = { setCoords } }) {
    return (
        <>
            <div className="layout p-10 backgroundCustom h-screen transition transform motion-reduce:transition-none motion-reduce:hover:transform-none">
                <div className="border-4  border-white/20 bg-white/30 rounded-3xl  shadow-lg min-h-[20vh] h-screen max-h-[85vh] overflow-y-auto mt-14 pt-0 flex flex-col justify-between">
                    <Header coords={coords} setCoords={setCoords} />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout