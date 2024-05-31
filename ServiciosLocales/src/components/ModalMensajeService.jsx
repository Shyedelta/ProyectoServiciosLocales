import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ModalMensajeService({ openModalMsg, setOpenModalMsg }) {
    const [mensaje, setMensaje] = useState('');
    const [empresaEmail, setEmpresaEmail] = useState('');
    const location = useLocation();
    const API_URL = 'https://api.jsonbin.io/v3/b/6658e97aad19ca34f871d2d3';
    const masterKey = '$2a$10$4FfE4DnGChnGhtxL1fZ7pu59/F1H8lTTdZ0PA1aeltIMWLrmpVW2e';
    const jsonEmpresas = 'https://api.jsonbin.io/v3/b/66543829acd3cb34a84e3f2d';

    useEffect(() => {
        // Obtener la ID de la empresa desde la URL
        const pathParts = location.pathname.split('/');
        const empresaId = pathParts[pathParts.length - 1];

        // Consumir el json de empresas para obtener los datos de la empresa correspondiente
        const fetchEmpresaData = async () => {
            try {
                const response = await fetch(jsonEmpresas, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': masterKey
                    }
                });
                const data = await response.json();
                const empresa = data.record.empresas.find(emp => emp.id == empresaId);

                if (empresa) {
                    setEmpresaEmail(empresa.email);
                } else {
                    console.error('Empresa no encontrada');
                }
            } catch (error) {
                console.error('Error al obtener datos de la empresa', error);
            }
        };

        fetchEmpresaData();
    }, [location]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));
        const origenEmail = user ? user.email : '';

        try {
            const response = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': masterKey
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener mensajes');
            }

            const data = await response.json();
            const messages = data.record.messages;

            let messageUpdated = false;
            messages.forEach(msg => {
                if (msg.destino === empresaEmail) {
                    msg.chats.forEach(chat => {
                        if (chat.origen === origenEmail) {
                            chat.msg.push({
                                text: mensaje,
                                date: new Date().toLocaleDateString()
                            });
                            messageUpdated = true;
                        }
                    });

                    if (!messageUpdated) {
                        msg.chats.push({
                            origen: origenEmail,
                            msg: [{
                                text: mensaje,
                                date: new Date().toLocaleDateString()
                            }]
                        });
                        messageUpdated = true;
                    }
                }
            });

            if (!messageUpdated) {
                messages.push({
                    destino: empresaEmail,
                    chats: [{
                        origen: origenEmail,
                        msg: [{
                            text: mensaje,
                            date: new Date().toLocaleDateString()
                        }]
                    }]
                });
            }
            const updateResponse = await fetch(API_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': masterKey
                },
                body: JSON.stringify({ messages })
            });

            if (!updateResponse.ok) {
                throw new Error('Error al actualizar mensajes');
            }
            setMensaje('');
            setOpenModalMsg(false);
        } catch (error) {
            console.error(error);
            alert('Hubo un error al enviar el mensaje');
        }
    };

    return (
        <div>
            <div id="crud-modal" tabIndex="-1" aria-hidden="true" className={`${openModalMsg ? 'block' : 'hidden'} overflow-hidden bg-black/70 overflow-y-auto overflow-x-hidden absolute left-0 top-0 grid place-content-center z-50 justify-center items-center w-screen h-screen`}>
                <div className="relative p-4 w-[40em] overflow-hidden max-w-md  ">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-[40em]">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Enviar Mensaje
                            </h3>
                            <button onClick={() => { setOpenModalMsg(false) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="mensaje" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
                                    <textarea id="mensaje" rows="4" className="block max-h-[30em] min-h-[10em] p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe un mensaje aqui"
                                        value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalMensajeService;
