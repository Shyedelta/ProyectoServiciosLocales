import React from 'react'
import "../styles/style.css"
import Header from './Header'
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout({userActive}) {

    return (
        <>
            <div className=" max-w-screen overflow-hidden bg-black/10 h-screen ">
                <div className="border-white/10 bg-white/40 min-h-[20vh] h-screen overflow-y-auto flex flex-col justify-between overflow-x-auto">
                    <Header userActive={userActive}/>
                    <div className='flex justify-start flex-col max-w-[70%] w-full mx-auto'>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout