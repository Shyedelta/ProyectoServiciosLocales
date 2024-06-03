import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/style.css"
import categorias from "../funciones/otros.js"
import Map from "../components/Map"
import json from "../db.json"
import Geolocation from '@react-native-community/geolocation';
import default_img from "../assets/img.png"
import ContactDetails from './ContactDetails.jsx';
import AcordionDetails from './AcordionDetails.jsx';
import InfoService from './InfoService.jsx';

function Servicio({ coords, setCoords }) {
    const [empresas, setEmpresas] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        obtenerUbicacion();
        obtenerDatos();
    }, []);

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
    const obtenerDatos = async () => {
        try {
            const data = await json;
            setEmpresas(data.empresas);
        } catch (error) {
            console.error("Error al obtener los datos. ", error);
        }
    };
    let items = null;
    const { id } = useParams();
    const empresa = empresas.find(e => e.id == id);
    const imgURL = empresa ? categorias.find(img => img.nombre == empresa.categorias[0])?.img : default_img;

    if (empresa && empresa.faq) {
        items = empresa.faq.map(faq => ({
            pregunta: faq.pregunta,
            parrafos: faq.parrafos
        }));
    }

    return (
        <div className='w-full '>
            <div className='pb-10 h-max w-full bg-white flex flex-col border-x'>
                <section style={{ backgroundImage: `url(${imgURL})` }} className={`bg-center bg-no-repeat bg-cover  bg-gray-700 bg-blend-multiply`}>
                    <div className="max-w-screen-xl text-center py-20 flex-col shadow-md rounded-xl flex items-center justify-center pointer-events-none">
                        <p className='text-center text-white text-[4vw] px-2 font-extralight my-10'>{empresa?.nombre}</p>
                    </div>
                </section>

                <InfoService empresa={empresa} />
                
                {empresa && 
                    <div className='pb-10 mb-10 '>
                        <div className='  shadow-lg  h-[23em] bg-trasparent '>
                            <Map controlOff empresa={empresa} coords={coords} setModalVisible={setModalVisible} />
                        </div>
                    </div>
                }

                <div className=' max-xl:flex-col px-10 flex flex-row overflow-hidden h-full w-full justify-between '>
                    <ContactDetails empresa={empresa} />
                    {empresa && empresa.faq && <AcordionDetails items={items} />}
                </div>

            </div>
        </div>
    );
}

export default Servicio;
