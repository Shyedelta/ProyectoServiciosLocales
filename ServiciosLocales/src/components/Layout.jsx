import React from 'react';
import "../styles/style.css";
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from '../funciones/ScrollToTop';

function Layout({ userActive }) {
    const location = useLocation();

    const isDashboardOrInbox = location.pathname === "/dashboard" || location.pathname === "/inbox" ||  location.pathname === "/contact";

    return (
        <>
            <div className="max-w-screen overflow-hidden bg-black/10 h-screen">
            <ScrollToTop />
                <div className="bg-gray-200 min-h-[20vh] h-screen overflow-y-auto flex flex-col justify-between overflow-x-auto">
                    <Header userActive={userActive} />
                    <div className={`flex justify-start flex-col ${!isDashboardOrInbox ? 'md:max-w-[70%]' : 'max-w-screen'}  w-full max-w-screen  mx-auto `}>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Layout;
