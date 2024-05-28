import React from 'react'
import NavbarButton from './NavbarButton'

function Navbar() {
    return (
        <div>
            <div className="hidden w-max lg:block md:w-auto sm:hidden" id="navbar-dropdown">
                <ul className={`flex flex-col font-medium p-0 md:p-0 rounded-lg md:space-x-3 rtl:space-x-reverse md:flex-row`}>
                    <NavbarButton route={"/"} name={"Inicio"} />
                    <NavbarButton route={"/servicios"} name={"Servicios"} />
                    <NavbarButton route={"/contact"} name={"Contacto"} />
                </ul>
            </div>
        </div>
    )
}

export default Navbar
