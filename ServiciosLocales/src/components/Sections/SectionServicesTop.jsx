import { useEffect, useState } from "react";
import json from "../../db.json"
import categorias from "../../funciones/otros.js";
import default_img from "../../assets/img.png";
import { Link } from "react-router-dom";

function SectionServicesTop() {
    const [empresas, setEmpresas] = useState([]);
    useEffect(() => {
        obtenerDatos();
    }, []);
    const obtenerDatos = async () => {
        try {
            const data = await json;
            setEmpresas(data.empresas);
        } catch (error) {
            console.error("Error al obtener los datos. ", error);
        }
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-700">Servicios destacados</h2>
                    <Link to={"/servicios"} className="text-sm my-auto font-semibold text-blue-700">
                        Ver todos <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
                <div className="mt-6 grid lg:grid-cols-3 grid-cols-1  gap-x-6 gap-y-6 ">
                    {empresas.slice(4, 7).map((empresa) => {
                        const imgURL = categorias.find((img) => img.nombre === empresa.categorias[0])?.img || default_img;
                        return <Link to={`/servicio/id/${empresa.id}`} key={empresa.id} className=" cursor-pointer">
                            <div className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src={imgURL} alt={empresa.nombre} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>

                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {empresa.nombre}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{empresa.propietario}</p>
                                    </div>
                                    <div className="flex justify-center align-middle">
                                        <p className="text-sm mt-[2px] font-medium text-gray-900">{empresa.rating}</p>
                                        <svg className="w-4 h-4 text-yellow-300 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </div>
    )
}
export default SectionServicesTop