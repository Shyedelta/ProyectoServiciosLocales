import React, { useEffect, useState } from 'react';
import DashboardUsers from './DashboardUsers.jsx'
import DashboardInbox from './DashboardInbox.jsx';
import DashboardServices from './DashboardServices.jsx';
function Dashboard({ userActive }) {
    const [numMsg, setNumMsg] = useState(null);
    const [contenido, setContenido] = useState('inbox');
    const API_URL = "https://api.jsonbin.io/v3/b/66589ac1ad19ca34f871abe5";
    const masterKey = '$2a$10$4FfE4DnGChnGhtxL1fZ7pu59/F1H8lTTdZ0PA1aeltIMWLrmpVW2e';

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch(API_URL, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': masterKey
                    }
                });

                if (!response.ok) {
                    throw new Error('Error al obtener mensajes');
                }

                const data = await response.json(); 
                setNumMsg(data.record.messages); 
            } catch (error) {
                console.error('Error al obtener mensajes. Por favor, inténtalo de nuevo más tarde.');
            }
        };

        fetchMessages();
    }, []);
    useEffect(() => {
        if (userActive?.email !== "admin@gmail.com") {
            window.location.href = "/";
        }
    }, [userActive]);

    const handleMenuClick = (select) => {
        setContenido(select)
    }

    return (
        <div className='overflow-hidden bg-white borde-x h-full w-full'>
            <div className='flex justify-between overflow-hidden md:flex-row flex-col'>
                <div className='min-w-[18em] md:m-10 mr-0 sticky z-10 w-[21em] rounded-md'>
                    <aside id="sidebar-multi-level-sidebar" className="fixed w-[16em] h-[30em]" aria-label="Sidebar">
                        <div className="h-fit md:h-full w-screen md:w-60 px-3 py-4 overflow-y-auto bg-gray-100 md:bg-gray-50  rounded-md">
                            <ul className=" font-medium flex flex-row md:flex-col">
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group" 
                                    // onClick={() => handleMenuClick('dashboard')}
                                    >
                                        <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                        </svg>
                                        <span className="ms-3">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group" 
                                    onClick={() => handleMenuClick('inbox')}>
                                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                                        {numMsg && <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">{numMsg?.length}</span>}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group" 
                                    onClick={() => handleMenuClick('usuarios')}>
                                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group" 
                                    onClick={() => handleMenuClick('servicios')}>
                                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Servicios</span>
                                        {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-500 hover:text-gray-800 rounded-lg hover:bg-gray-100 group" 
                                    onClick={() => handleMenuClick('logout')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                                        </svg>
                                        <span className="flex-1 ms-2 whitespace-nowrap text-gray-800">Cerrar sesión</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>

                <div className="m-10 ml-0 w-full overflow-hidden">
                    <div className="p-10 border-2 overflow-y-auto bg-gray-50 max-h-[80vh] min-h-[65vh] w-full border-gray-200 border-dashed rounded-lg">
                        {contenido === 'dashboard' && <div>Dashboard</div>}
                        {contenido === 'inbox' && <DashboardInbox />}
                        {contenido === 'usuarios' && <DashboardUsers />}
                        {contenido === 'servicios' && <DashboardServices />}
                        {contenido === 'logout' && <div>{localStorage.removeItem('user')}{window.location.href = "/"}</div>}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Dashboard;
