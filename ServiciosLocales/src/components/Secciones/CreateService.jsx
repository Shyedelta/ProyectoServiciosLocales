import React, { useEffect, useState } from 'react';
import categorias from '../../funciones/categorias.js';
import Map from '../Map.jsx';
import { masterKey, jsonEmpresas } from '../../funciones/constantes.js'; 

function CreateService() { 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';
    const [coords, setCoords] = useState(JSON.parse(localStorage.getItem('markerPosition')));
    const [service, setService] = useState({
        nombre: '',
        propietario: user.name || '',
        email: user.email || '',
        latitud: coords?.lat,
        longitud: coords?.lng,
        servicio: '',
        telefono: '',
        horario: '',
        categorias: [],
        faq: '',
        verificado: false,
        rating: 0,
    });

    useEffect(() => {
        setCoords(JSON.parse(localStorage.getItem('markerPosition')));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService({ ...service, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setService({ ...service, categorias: [...service.categorias, value] });
        } else {
            setService({ ...service, categorias: service.categorias.filter((cat) => cat !== value) });
        }
    };  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(jsonEmpresas, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': masterKey,
                },
            });
            const data = await response.json();

            const newService = {
                ...service,
                id: data.record.empresas.length + 1,
                faq: service.faq.split('\n').map((faq) => {
                    const [pregunta, ...parrafos] = faq.split('|');
                    return { pregunta, parrafos };
                }),
                ubicacion: {
                    latitud: parseFloat(service.latitud),
                    longitud: parseFloat(service.longitud),
                },
            };

            const putResponse = await fetch(jsonEmpresas, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': masterKey,
                },
                body: JSON.stringify({
                    ...data.record,
                    empresas: [...data.record.empresas, newService],
                }),
            });

            if (!putResponse.ok) {
                throw new Error('Error al actualizar los datos en el backend');
            }
            alert('Servicio agregado exitosamente');
            setService({
                nombre: '',
                propietario: '',
                email: '',
                latitud: '',
                longitud: '',
                servicio: '',
                telefono: '',
                horario: '',
                categorias: [],
                faq: '',
                verificado: false,
                rating: 0,
            });
        } catch (error) {
            console.error('Error al actualizar el backend:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error al cargar los datos: {error.message}</div>;
    }

    return (
        <div className='bg-white w-full min-h-screen flex justify-center items-center'>
            <div className='bg-gray-100 p-6 shadow-md flex flex-col w-full md:w-2/3 lg:w-1/2 gap-6'>
                <h1 className='text-2xl font-bold'>Crear nuevo servicio</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <label>
                            Nombre:
                            <input required type='text' name='nombre' value={service.nombre} onChange={handleChange} className='border rounded px-3 py-2 w-full' />
                        </label>
                        <label>
                            Propietario:
                            <input disabled type='text' name='propietario' value={service.propietario} onChange={handleChange} className='border rounded px-3 py-2 w-full' />
                        </label>
                    </div>
                    <label>
                        Email:
                        <input disabled type='email' name='email' value={service.email} onChange={handleChange} className='border rounded px-3 py-2 w-full' />
                    </label>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <label>
                            Latitud:
                            <input type='text' name='latitud' value={coords?.lat || ''} onChange={handleChange} className='border rounded px-3 py-2 w-full' />
                        </label>
                        <label>
                            Longitud:
                            <input type='text' name='longitud' value={coords?.lng || ''} onChange={handleChange} className='border rounded px-3 py-2 w-full' />
                        </label>
                    </div>
                    {/* <div className='pb-10 mb-10 '>
                        <div className=' h-[23em] bg-transparent '>
                            <Map controlOff />
                        </div>
                    </div> */}
                    <label>
                        Servicio:
                        <input required placeholder='ej: Servicios eléctricos...' type='text' name='servicio' value={service.servicio} onChange={handleChange} className='border rounded px-3 py-2 w-full' />
                    </label>
                    <label>
                        Teléfono:
                        <input required placeholder='ej: +01 234 567 890' type='text' name='telefono' value={service.telefono} onChange={handleChange} className='border rounded px-3 py-2 w-full' />
                    </label>
                    <label>
                        Horario:
                        <input required placeholder='ej: Lunes a sábado: 9:00 - 18:00' type='text' name='horario' value={service.horario} onChange={handleChange} className='border rounded px-3 py-2 w-full' />
                    </label>
                    <fieldset className='border rounded px-3 py-2 w-full'>
                        <legend>Categorías:</legend>
                        <div className='grid grid-cols-2 gap-4'>
                            {categorias.map((categoria) => (
                                <label key={categoria.nombre} className='block'>
                                    <input
                                        type='checkbox'
                                        value={categoria.nombre}
                                        checked={service.categorias.includes(categoria.nombre)}
                                        onChange={handleCheckboxChange}
                                        className='mr-2'
                                    />
                                    {categoria.nombre}
                                </label>
                            ))}
                        </div>
                    </fieldset>
                    <label>
                        FAQ (pregunta|parrafo1|parrafo2):
                        <textarea name='faq' value={service.faq} onChange={handleChange} className='border rounded px-3 py-2 w-full' />
                    </label>
                    <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Agregar servicio</button>
                </form>
            </div>
        </div>
    );
}

export default CreateService;
