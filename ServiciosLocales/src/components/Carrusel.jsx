import React, { useEffect, useState } from 'react';
import fetchDatos from '../service/consumirDatos.js';
import Map from "./Map.jsx"
import "../styles/style.css"
import otros from "../assets/otros.js"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Carrusel({ coords, setCoords }) {
  const [empresas, setEmpresas] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [coloresAsignados, setColoresAsignados] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const datosOffline = 
{
  "empresas": [
    {
      "id": 1,
      "NameNegocio": "Peluquería Estilo y Belleza",
      "NombreEmprendedor": "María López",
      "Ubicacion": {
        "latitud": 42.8767,
        "longitud": -8.5463
      },
      "TipoServicio": "Peluquería y estilismo",
      "Telefono": "+34 987 654 321",
      "Horario": "Lunes a viernes: 9:00 - 19:00, Sábado: 9:00 - 14:00",
      "Categorias": [
        "Peluquería",
        "Belleza"
      ]
    },
    {
      "id": 2,
      "NameNegocio": "Taller Mecánico El Progreso",
      "NombreEmprendedor": "Juan García",
      "Ubicacion": {
        "latitud": 41.6552,
        "longitud": -4.7237
      },
      "TipoServicio": "Reparación de automóviles",
      "Telefono": "+34 912 345 678",
      "Horario": "Lunes a viernes: 8:00 - 18:00",
      "Categorias": [
        "Taller mecánico",
        "Automóviles"
      ]
    },
    {
      "id": 3,
      "NameNegocio": "Cafetería El Rincón de los Sabores",
      "NombreEmprendedor": "Pedro Martínez",
      "Ubicacion": {
        "latitud": 39.4702,
        "longitud": -0.3768
      },
      "TipoServicio": "Cafetería y pastelería",
      "Telefono": "+34 654 987 321",
      "Horario": "Todos los días: 7:00 - 21:00",
      "Categorias": [
        "Cafetería",
        "Pastelería"
      ]
    },
    {
      "id": 4,
      "NameNegocio": "Electricidad El Faro",
      "NombreEmprendedor": "Ana Rodríguez",
      "Ubicacion": {
        "latitud": 37.3891,
        "longitud": -5.9825
      },
      "TipoServicio": "Servicios eléctricos",
      "Telefono": "+34 667 123 456",
      "Horario": "Lunes a sábado: 9:00 - 18:00",
      "Categorias": [
        "Electricidad",
        "Servicios"
      ]
    },
    {
      "id": 5,
      "NameNegocio": "Florería La Primavera",
      "NombreEmprendedor": "Luisa Sánchez",
      "Ubicacion": {
        "latitud": 40.4167,
        "longitud": -3.7032
      },
      "TipoServicio": "Venta de flores y arreglos florales",
      "Telefono": "+34 678 234 567",
      "Horario": "Lunes a domingo: 8:00 - 20:00",
      "Categorias": [
        "Florería",
        "Decoración"
      ]
    },
    {
      "id": 6,
      "NameNegocio": "Diseño Gráfico Creativo",
      "NombreEmprendedor": "María Gómez",
      "Ubicacion": {
        "latitud": 41.3926,
        "longitud": 2.1432
      },
      "TipoServicio": "Diseño gráfico",
      "Telefono": "+34 645 321 987",
      "Horario": "Flexible, con cita previa",
      "Categorias": [
        "Diseño gráfico",
        "Publicidad"
      ]
    },
    {
      "id": 7,
      "NameNegocio": "Asesoría Contable y Fiscal",
      "NombreEmprendedor": "Juan Pérez",
      "Ubicacion": {
        "latitud": 41.3888,
        "longitud": 2.1589
      },
      "TipoServicio": "Asesoría contable y fiscal",
      "Telefono": "+34 678 987 654",
      "Horario": "Lunes a viernes: 9:00 - 18:00, Sábado: 9:00 - 13:00",
      "Categorias": [
        "Asesoría contable",
        "Asesoría fiscal"
      ]
    },
    {
      "id": 8,
      "NameNegocio": "Masajista Terapéutico",
      "NombreEmprendedor": "Laura Fernández",
      "Ubicacion": {
        "latitud": 40.4637,
        "longitud": -3.7492
      },
      "TipoServicio": "Masajes terapéuticos",
      "Telefono": "+34 689 234 567",
      "Horario": "Flexible, con cita previa",
      "Categorias": [
        "Masajes",
        "Salud"
      ]
    },
    {
      "id": 9,
      "NameNegocio": "Entrenador Personal",
      "NombreEmprendedor": "Sergio Martín",
      "Ubicacion": {
        "latitud": 40.4168,
        "longitud": -3.7038
      },
      "TipoServicio": "Entrenamiento personalizado",
      "Telefono": "+34 657 876 543",
      "Horario": "Flexible, adaptado a las necesidades del cliente",
      "Categorias": [
        "Entrenamiento",
        "Salud"
      ]
    },
    {
      "id": 10,
      "NameNegocio": "Reparación de Ordenadores",
      "NombreEmprendedor": "José García",
      "Ubicacion": {
        "latitud": 40.4637,
        "longitud": -3.7492
      },
      "TipoServicio": "Reparación de ordenadores",
      "Telefono": "+34 678 345 678",
      "Horario": "Lunes a viernes: 10:00 - 19:00",
      "Categorias": [
        "Informática",
        "Servicios"
      ]
    }
  ]
}


  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await fetchDatos();
        if(!data.ok){
          setEmpresas(datosOffline);
        }else{
        setEmpresas(data);
}
      } catch (error) {
        console.error("Error al obtener los datos. ", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };
    obtenerDatos();
  }, []);

  useEffect(() => {
    if (empresas.length > 0 && coloresAsignados.length === 0) {
      const coloresAleatorios = empresas.map(() => seleccionarColorFondo());
      setColoresAsignados(coloresAleatorios);
    }
  }, [empresas, coloresAsignados]);

  const seleccionarColorFondo = () => {
    const coloress = otros[0];
    return coloress[Math.floor(Math.random() * otros[0].length)];
  };

  const handleMouseEnter = (id) => {
    setActiveItem(id);
  }

  return (
    <div className="overflow-auto min-h-[max-content] scroll-smooth h-[45em]">
      {loading ? (
        <div className=" overflow-auto overflow-y-hidden flex  ">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="m-2 bg-purple-100 p-5 my-5 shadow-lg rounded-3xl aspect-square h-72 w-72 flex justify-center align-middle">
                <div class="loader w-max h-40 pt-32 ">
                  <div class="loader__circle"></div>
                  <div class="loader__circle"></div>
                  <div class="loader__circle"></div>
                  <div class="loader__circle"></div>
                  <div class="loader__circle"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <Carousel responsive={otros[1]} className='z-[11]'> 
            {empresas.slice(0, 10).map((empresa, index) => (
              <div key={empresa.id} className="static h-[36em] z-[11] w-[17em]">
                <div
                  className=" bg-slate-300 p-5 my-5 shadow-lg text-stone-800 rounded-3xl aspect-square h-64 w-64"
                  style={{ backgroundImage: coloresAsignados[index] }}
                  onMouseEnter={() => handleMouseEnter(empresa.id)}
                >
                  {activeItem !== empresa.id && (
                    <h2 className="text-center relative color-[initial] text-white drop-shadow-sm blur-[0.5px] text-1xl h-full flex items-center justify-center animate-pulse">
                      <div className="tracking-in-expand uppercase text-2xl ">{empresa.NameNegocio}</div>
                    </h2>
                  )}
                  {activeItem === empresa.id && (
                    <div className="e-card relative playing text-nowrap -translate-y-[6.2em]">
                      <div className="image"></div>
                      <div className="wave"></div>
                      <div className="wave"></div>
                      <div className="wave"></div>
                      <div className="infotop scale-in-top delay-1">
                        {empresa.NameNegocio}
                        <div className='font-light tracking-wide'>{empresa.TipoServicio}</div>
                        <div className="name uppercase">{empresa.NombreEmprendedor}</div>
                        <button className="buttonCustom my-8 cursor-pointer">VER MÁS</button>
                      </div>
                    </div>
                  )}
                </div>
                {activeItem === empresa.id && empresa.Ubicacion && (
                  <div className="scale-in-top relative right-2 top-1 z-50" onMouseLeave={() => setActiveItem(null)}>
                    <div className="bg-white p-4 shadow-lg rounded-3xl aspect-square max-w-[17em] z-50 min-w-[17em] scroll-smooth md:scroll-auto">
                      <Map empresa={empresa} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Carousel> 
        </>
      )}

      {coords && <p className='relative  '>{coords.latitude},  {coords.longitude}</p>}
    </div>
  );
}

export default Carrusel;
