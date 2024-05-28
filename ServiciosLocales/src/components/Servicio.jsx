import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/style.css"
import otros from "../funciones/otros.js"
import Map from "../components/Map"
import json from "../db.json"
import Geolocation from '@react-native-community/geolocation';
import Modal from './Modal.jsx';
import default_img from "../assets/img.png"
import ContactDetails from './ContactDetails.jsx';
import AcordionDetails from './AcordionDetails.jsx';
import Valoraciones from './Valoraciones.jsx';

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
    const imgURL = empresa ? otros[2].find(img => img.nombre == empresa.categorias[0])?.img : default_img;

    // const count = useMotionValue(0);
    // const rounded = useTransform(count, Math.round);
    // useEffect(() => {
    //     const animation = animate(count, 100, { duration: 10 });
    //     return animation.stop;
    // }, []);

    if(empresa && empresa.faq){
        items = empresa.faq.map(faq => ({
            pregunta: faq.pregunta,
            parrafos: faq.parrafos
        }));
    }

    return (
        <div>
            {modalVisible && <Modal coords={coords} setModalVisible={setModalVisible} />}
            <div className='p-10 h-max flex flex-col'>
                <div className="relative h-max">
                    <div style={{ backgroundImage: `url(${imgURL})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
                        className='h-[19em] mb-0 p-5 rounded-xl content-center'>
                    </div>
                    <Valoraciones empresa={empresa}/>
                </div>

                {empresa &&
                    <div className='py-10'>
                        <div className='py-0 overflow-hidden shadow-lg rounded-2xl h-[23em] '>
                            <Map controlOff empresa={empresa} coords={coords} setModalVisible={setModalVisible} />
                        </div>
                    </div>
                }

                <div className=' h-[21em] flex flex-col w-full justify-between md:flex-row'>
                    <ContactDetails empresa={empresa} />
                    {empresa && empresa.faq && <AcordionDetails items={items} />}
                </div>


                {coords && <span className='absolute top-7 left-10 text-white bg-purple-400 rounded-full px-2 border w-max'>{coords.latitude},  {coords.longitude}</span>}


                {/* <motion.h1 className='font-bold text-6xl text-white '>{rounded}</motion.h1> */}
            </div>
        </div>
    );
}

export default Servicio;
