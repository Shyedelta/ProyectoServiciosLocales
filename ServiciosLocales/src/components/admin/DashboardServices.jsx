import React, { useState, useEffect } from 'react';
import categorias from '../../funciones/otros';
import Card from '../Card';  

function DashboardServices() {
  const [empresas, setEmpresas] = useState([]); 
  const [user, setUser] = useState(null);
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
        const empresas = data.record.empresas; 
        setUser(user || 'Usuario');
        if (empresas) { 
          setEmpresas(empresas); 
        } else {
          console.error('Empresas no encontradas'); 
        }
      } catch (error) {
        console.error('Error al obtener datos de las empresas', error); 
      }
    };

    fetchEmpresaData();
  }, []); 

  return (
    <div className='bg-white p-10 h-full min-h-screen w-full'>
      <p className='text-3xl font-bold mb-5'>¡Hola {user ? user.name : 'Usuario'}!</p>
      <p className='text-lg font-bold mb-5 text-gray-600'>Servicios creados:</p>
      <div className='grid grid-cols-3 gap-10'>
        {empresas.map(empresa => ( 
          <Card key={empresa.id} empresa={empresa} imgURL={categorias.find(img => img.nombre === empresa.categorias[0])?.img} /> 
        ))}
      </div>
    </div>
  );
}

export default DashboardServices;
