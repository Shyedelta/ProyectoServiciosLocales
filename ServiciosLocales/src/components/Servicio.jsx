import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchDatos from '../service/consumirDatos';
import "../styles/style.css"
import otros from "../assets/otros.js"
import Map from "../components/Map"

function Servicio({ coords }) {
    const [empresas, setEmpresas] = useState([]);
    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const data = await fetchDatos();
                setEmpresas(data);
            } catch (error) {
                console.error("Error al obtener los datos. ", error);
            }
        };
        obtenerDatos();
    }, []);

    const { id } = useParams();
    const empresa = empresas.find(e => e.id == id);
    const imgURL = empresa ? otros[2].find(img => img.nombre == empresa.Categorias[0])?.img : null;

    return (
        <div className='py-10 h-max flex flex-col'>
            <div className="relative h-max">
                <div style={{
                    backgroundImage: imgURL ? `url(${imgURL})` : 'none',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                    className='h-[19em] mb-0 p-5 rounded-xl content-center'>
                </div>
                <div className="bg-black/50 shadow-md rounded-xl absolute inset-0 flex items-center justify-center pointer-events-none">
                    {empresa && <p className='text-center text-white text-6xl font-extralight tracking-widest tracking-in-expand'>{empresa.NameNegocio}</p>}
                </div>
            </div>
            {empresa && <div className='py-10 h-[20em] '><Map controlOf empresa={empresa} coords={coords}/></div>}

            {coords && <p>{coords.latitude},  {coords.longitude}</p>}
        </div>
    );
}

export default Servicio;
