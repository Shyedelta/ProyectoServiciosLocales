import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from "../../imgs/default.jpg";

function CardUsers({ user, handleDropdownToggle, index, openDropdownIndex, handleDeleteUser, handleEditUser }) {
    const [empresaId, setEmpresaId] = useState(null);
    const jsonEmpresas = 'https://api.jsonbin.io/v3/b/66543829acd3cb34a84e3f2d';
    const masterKey = '$2a$10$4FfE4DnGChnGhtxL1fZ7pu59/F1H8lTTdZ0PA1aeltIMWLrmpVW2e';

    useEffect(() => {
        const fetchEmpresaData = async () => {
            try {
                const response = await fetch(jsonEmpresas, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': masterKey
                    }
                });
                const data = await response.json();
                const empresa = data.record.empresas.find(emp => emp.email === user.email);
                if (empresa) {
                    setEmpresaId(empresa.id);
                }
            } catch (error) {
                console.error('Error al obtener datos de la empresa:', error);
            }
        };

        fetchEmpresaData();
    }, [user]);

    const handleServiciosClick = () => {
        if (empresaId) {
            return `/servicio/id/${empresaId}`;
        } else {
            return `/dashboard#`;
        }
    };

    return (
        <div className="h-max w-60 bg-white border border-gray-200 rounded-lg shadow ">
            <div className="flex justify-end px-4 pt-4">
                <button
                    onClick={() => handleDropdownToggle(index)}
                    className="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
                    type="button"
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                </button>
                {openDropdownIndex === index && (
                    <div className="relative" onMouseLeave={() => handleDropdownToggle(null)} >
                        <div className="absolute z-10 top-full left-0 text-base bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-20 dark:bg-gray-700">
                            <div className="py-2">
                                <button onClick={() => handleEditUser(user)} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                                    Edit
                                </button>
                                <button onClick={() => handleDeleteUser(user.id)} className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 ">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center text-center *:line-clamp-1 p-5">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={defaultImg} alt="Imagen perfil" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">{user.name} {user.lastName && user.lastName}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">#{user.id}</span>
                <div className="flex mt-4 md:mt-6">
                    {empresaId ? (
                        <Link to={`/servicio/id/${empresaId}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Servicios
                        </Link>
                    ) : (
                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-300 rounded-lg cursor-not-allowed" disabled >
                            Servicios
                        </button>
                    )}
                    <a href="#" className="py-2.5 px-4 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 ">Mensaje</a>
                </div>
            </div>
        </div>
    );
}

export default CardUsers;
