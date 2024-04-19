import React, { useState } from 'react'
import "../styles/style.css"
import Header from './Header'
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
function Layout() {
    const [coords, setCoords] = useState(null);
    return (
        <>
            <div className="layout p-10 backgroundCustom h-screen transition transform motion-reduce:transition-none motion-reduce:hover:transform-none">
                <div className="bg-white/50 rounded-3xl p-10 shadow-lg min-h-[20vh] h-screen max-h-[85vh] overflow-y-auto mt-14 pt-0 flex flex-col justify-between">
                    <Header setCoords={setCoords} />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout