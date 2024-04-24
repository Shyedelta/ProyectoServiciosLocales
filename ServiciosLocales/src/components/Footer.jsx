import React from 'react'

function Footer() {
    return (
        <div className='p-10'>
            <footer className="bg-white rounded-lg shadow mt-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">ServiciosLocales</a>. Todos los derechos reservados
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Aviso Legal</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Política de Privacidad</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licencias</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contacto</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer