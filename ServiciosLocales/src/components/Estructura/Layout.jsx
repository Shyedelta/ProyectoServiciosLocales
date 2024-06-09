import React from 'react';
import "../../styles/style.css";
import Header from '../Estructura/Header';
import Footer from '../Estructura/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function Layout({ userActive }) {
    const location = useLocation();

    const isDashboardOrInbox = location.pathname === "/dashboard" || location.pathname === "/inbox" ||  location.pathname === "/contact";

    return (
        <>
            <div className="max-w-screen overflow-hidden bg-black/10 h-screen">
                <div className="bg-gray-200 min-h-[20vh] h-screen overflow-y-auto flex flex-col justify-between overflow-x-auto">
                    <Header userActive={userActive} />
                    <div className={`flex justify-start flex-col ${!isDashboardOrInbox ? 'md:max-w-[80%]' : 'max-w-screen'}  w-full max-w-screen  mx-auto `}>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Layout;
