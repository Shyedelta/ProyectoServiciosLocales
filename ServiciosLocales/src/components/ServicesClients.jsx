import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';
import categorias from "../funciones/categorias.js";
import { Link } from 'react-router-dom';
import { masterKey, jsonEmpresas } from '../funciones/constantes.js';

function ServicesClients() {
    const [empresas, setEmpresas] = useState([]);
    const [user, setUser] = useState(''); 

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
                const user = JSON.parse(localStorage.getItem('user'));
                const empresas = data.record.empresas.filter(emp => emp.email === user.email);
                setUser(user || 'Usuario');
                setEmpresas(empresas);
            } catch (error) {
                console.error('Error al obtener datos de las empresas', error);
            }
        };

        fetchEmpresaData();
    }, []);

    const getImgURL = (empresa) => {
        return categorias.find(img => img.nombre === empresa.categorias[0])?.img;
    };

    const handleDelete = async (id) => {
        try { 
            const response = await fetch(jsonEmpresas, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': masterKey
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener la lista de empresas');
            }

            const data = await response.json();
            const empresasActuales = data.record.empresas;
 
            const updatedEmpresas = empresasActuales.filter(empresa => empresa.id !== id);
 
            const putResponse = await fetch(jsonEmpresas, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': masterKey
                },
                body: JSON.stringify({ empresas: updatedEmpresas })
            });

            if (!putResponse.ok) {
                throw new Error('Error al actualizar los datos de las empresas');
            }
 
            setEmpresas(empresas.filter(empresa => empresa.id !== id));
        } catch (error) {
            console.error('Error al borrar el servicio', error);
        }
    };

    return (
        <div className='bg-white p-10 h-full min-h-screen w-full'>
            <p className='text-3xl font-bold mb-5'>¡Hola {user.name}!</p>
            <div className='flex flex-col sm:flex-row justify-between *:my-auto mb-5 '>
                <p className='text-lg font-bold mb-5 text-gray-600'>Tus servicios creados:</p>
                <Link to="/createservice" className="text-center text-white bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                    Crear un nuevo servicio
                </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {empresas.length > 0 ? (
                    empresas.map((empresa, index) => (
                        <Card key={index} empresa={empresa} imgURL={getImgURL(empresa)} onDelete={handleDelete} />
                    ))
                ) : (
                    <p>No se encontraron servicios.</p>
                )}
            </div>
        </div>
    );
}

export default ServicesClients;
