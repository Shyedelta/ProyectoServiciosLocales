import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/style.css"
import otros from "../assets/otros.js"
import Map from "../components/Map"
import json from "../db.json"
import Geolocation from '@react-native-community/geolocation';
import Modal from './Modal.jsx';

function Servicio({ coords, setCoords }) {
    const [empresas, setEmpresas] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        obtenerUbicacion();
    }, []);
    useEffect(() => {
    }, [modalVisible]);

    const obtenerUbicacion = () => {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setCoords({ latitude, longitude });
            },
            error => console.log("Error al obtener la ubicación:", error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };
    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const data = await json;
                setEmpresas(data.empresas);
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
        <>
            {modalVisible && <Modal coords={coords} setModalVisible={setModalVisible} />}
            <div className='p-10 h-max flex flex-col'>
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

                {empresa && <div className='py-10 h-[25em] '><Map controlOff empresa={empresa} coords={coords} setModalVisible={setModalVisible} /></div>}

                {coords && <span className='absolute top-7 left-10 text-white bg-purple-400 rounded-full px-2 border w-max'>{coords.latitude},  {coords.longitude}</span>}
            </div>
        </>
    );
}

export default Servicio;
