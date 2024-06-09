import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ModalMensajeService from './ModalMensajeService';
import Toast from '../Toast';

function InfoService({ empresa,mensajeEnviado,setMensajeEnviado }) {
    const [openModalMsg, setOpenModalMsg] = useState(null);
    const [categoriaClasses, setCategoriaClasses] = useState([]);
    const [user, setUser] = useState(null);
    const [toast, setToast] = useState(false);

    const fullStar = (
        <svg className="w-5 h-5 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
    );

    const emptyStar = (
        <svg className="w-5 h-5 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
    );

    const stars = [];
    const maxStars = 5;
    const filledStars = Math.round(empresa?.rating / 2);

    for (let i = 0; i < maxStars; i++) {
        stars.push(i < filledStars ? fullStar : emptyStar);
    }

    const colorClasses = [
        "bg-blue-100 text-blue-800 border-blue-400",
        "bg-red-100 text-red-800 border-red-400",
        "bg-green-100 text-green-800 border-green-400",
        "bg-yellow-100 text-yellow-800 border-yellow-300",
        "bg-indigo-100 text-indigo-800 border-indigo-400",
        "bg-purple-100 text-purple-800 border-purple-400",
        "bg-pink-100 text-pink-800 border-pink-400"
    ];

    function getRandomColorClass() {
        const randomIndex = Math.floor(Math.random() * colorClasses.length);
        return colorClasses[randomIndex];
    }

    useEffect(() => {
        if (empresa?.categorias) {
            const classes = empresa.categorias.map(() => getRandomColorClass());
            setCategoriaClasses(classes);
        }

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [empresa]);

    const handleToastClose = () => {
        setToast(false);
    };

    return (
        <>
            <div className="px-10 mt-10 gap-3 h-max p-3 w-full grid grid-rows-1 lg:grid-cols-3 place-items-center">
                <div className='w-full overflow-hidden flex flex-col p-4 px-10 bg-green-400/70 hover:bg-green-400 rounded-xl gap-2'>
                    <p className='text-lg font-bold tracking-wide text-white'>Categorias</p>
                    <div className='flex line-clamp-1 text-nowrap'>
                        {empresa?.categorias?.map((categoria, index) => (
                            <Link key={index} to={"/servicios/" + categoria}>
                                <p className={`border inline-flex items-center px-2.5 py-0.5 rounded-md text-md font-medium me-2 ${categoriaClasses[index] || ''}`}>
                                    {(categoria).split(" ")[0]}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='w-full overflow-hidden flex flex-col p-5 px-10 bg-amber-700/70 hover:bg-amber-700 rounded-xl gap-2'>
                    <p className='text-lg font-bold tracking-wide text-white'>Valoración</p>
                    <div className='flex'>
                        {stars.map((star, index) => (
                            <span key={index}>{star} </span>
                        ))}
                        <p className='mx-5 hidden xl:block text-white'>{filledStars} <span className='font-bold'>/ 5</span></p>
                    </div>
                </div>
                <div className='w-full overflow-hidden p-5 gap-5 rounded-xl bg-blue-400/70 hover:bg-blue-400 grid grid-cols-2 content-between'>
                    <div className='flex gap-2'>
                        <div className='rounded-full bg-black/40 text-white font-bold aspect-square h-14 grid place-content-center '>
                            {empresa && (empresa?.propietario).charAt(0)}
                        </div>
                        <div className=' hidden md:block lg:hidden 2xl:block'>
                            <p className='text-lg my-auto text-white font-bold tracking-wide line-clamp-1'>{empresa?.propietario}</p>
                            <p className='my-auto text-white font-extralight text-clip line-clamp-1'>{empresa?.email}</p>
                        </div>
                    </div>
                    {mensajeEnviado && <Toast text={"Se ha enviado el mensaje"} />}
                    {toast && <Toast text={"Inicia sesión para enviar un mensaje"} onClose={handleToastClose} />}
                        <button
                            onClick={user !== null ?
                                () => setOpenModalMsg(true) :
                                () => setToast(true)
                            }
                            className={`justify-self-end w-20 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white ${user?.email == empresa?.email ? 'hidden' : 'block'} ${user !== null ? 'bg-blue-700 hover:bg-blue-800 cursor-pointer' : 'bg-gray-500 cursor-not-allowed'} rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300`}
                        >
                            <svg className='mx-auto min-w-5' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                </div>
            </div>

            {openModalMsg && <ModalMensajeService openModalMsg={openModalMsg} setOpenModalMsg={setOpenModalMsg} recipientEmail={empresa?.email} setMensajeEnviado={setMensajeEnviado}/>}
        </>
    );
}

export default InfoService;
