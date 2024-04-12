import React, { useState, useEffect, useRef } from 'react'
import "../styles/style.css"
import Carrusel from './Carrusel'
import Header from './Header'
import Footer from './Footer';
import Categorias from './Categorias';
import Tarjeta from './Tarjeta';
import { Modal } from 'flowbite';
function Layout() {
    const [coords, setCoords] = useState(null);
    const modalRef = useRef(null);
    const [modal, setModal] = useState(null);

    const options = {
        placement: 'bottom-right',
        backdrop: 'dynamic',
        backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
        closable: true,
    };
    const instanceOptions = {
        id: 'modalEl',
        override: false
    };
    useEffect(() => {
        const modalInstance = new Modal(modalRef.current, options, instanceOptions);
        //modalInstance.hide();
        setModal(modalInstance);
    }, []);
    return (
        <>
            <div ref={modalRef}>
                <div tabIndex="-1" className="bg-black/80 grid grid-cols-1 gap-1 place-items-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-0rem)] max-h-full">
                    <div className="relative w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                    Test modal
                                </h3>
                                <button onClick={() => { modal && modal.hide() }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div class="p-4 md:p-5 space-y-4">
                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                </p>
                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                </p>
                            </div>
                            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                <button type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="layout p-10 backgroundCustom h-screen transition transform motion-reduce:transition-none motion-reduce:hover:transform-none">
                <div className="bg-white/50 rounded-3xl p-10 shadow-lg min-h-[20vh] h-screen max-h-[85vh] overflow-y-auto mt-14 pt-0 flex flex-col justify-between">
                    <Header setCoords={setCoords} />
                    <div className=' px-5'>
                        <Categorias />
                        <Carrusel coords={coords} setCoords={setCoords} />
                        <div className='relative bottom-96 flex justify-between flex-wrap flex-row'>
                            <Tarjeta />
                            <Tarjeta />
                            <Tarjeta />
                            <Tarjeta />
                            <Tarjeta />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout