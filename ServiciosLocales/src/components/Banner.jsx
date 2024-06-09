import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

function Banner() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='*:select-none w-full shadow-lg text-white flex '>
            {!showContent ? (
                <div className="flex w-full h-screen min-h-[40.75em] items-center justify-center align-middle text-center py-20 bg-gray-700  ">
                    <div className="text-center w-full h-full grid place-content-center">
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                </div>
            ) : (
                <section className={`w-full h-[90vh] bg-cover grid place-content-center bg-center bg-no-repeat bg-[url('./imgs/toledo.jpg')] bg-gray-700/90 bg-blend-multiply`}>
                    <div className=" mx-auto max-w-screen text-center pb-32 pt-32 px-10">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                            ¡No esperes más!<br />Contacta con los más cercanos
                        </h1>
                        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                            Eliminamos demoras y complicaciones, priorizando la comodidad del usuario.
                            Promovemos la colaboración y la accesibilidad entre comunidades, facilitando el bienestar de todos los involucrados.
                        </p>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity:1}}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className=" flex space-y-4 flex-row justify-center w-fit mx-auto">
                            <Link to={"/servicios"} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                                Empezar
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default Banner;
