import React, { useEffect, useState } from 'react'
import Card from './Card.jsx';
import categorias from "../funciones/otros.js";

function ServicesClients() {
    const [empresa, setEmpresa] = useState('');
    const [user, setUser] = useState('');
    const masterKey = '$2a$10$4FfE4DnGChnGhtxL1fZ7pu59/F1H8lTTdZ0PA1aeltIMWLrmpVW2e';
    const jsonEmpresas = 'https://api.jsonbin.io/v3/b/66543829acd3cb34a84e3f2d';

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
                const empresa = data.record.empresas.find(emp => emp.email == user.email);
                setUser(user || 'Usuario');
                if (empresa) { 
                    setEmpresa(empresa);
                } else {
                    console.error('Empresa no encontrada');
                }
            } catch (error) {
                console.error('Error al obtener datos de la empresa', error);
            }
        };

        fetchEmpresaData();
    }, [location]);
    const imgURL = empresa && categorias.find(img => img.nombre == empresa.categorias[0])?.img ;
    return (
        <div className='bg-white p-10 h-full min-h-screen w-full'>
            <p className='text-3xl font-bold mb-5'>¡Hola {user.name}!</p>
            <p className='text-lg  font-bold mb-5  text-gray-600'>Tus servicios creados:</p>
            <div className='grid grid-cols-2 gap-10'>
                {empresa && <Card empresa={empresa} imgURL={imgURL} />}
            </div>
        </div>
    )
}

export default ServicesClients