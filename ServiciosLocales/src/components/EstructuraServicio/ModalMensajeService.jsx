import React, { useState } from 'react';
import { masterKey, bConversations } from '../../funciones/constantes.js';
function ModalMensajeService({ openModalMsg, setOpenModalMsg, recipientEmail, setMensajeEnviado }) {
    const [mensaje, setMensaje] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));
        const origenEmail = user ? user.email : '';

        try {
            const response = await fetch(bConversations, {
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
            let conversations = data.record.conversations || [];

            let conversationFound = false;
            conversations.forEach(conversation => {
                if (conversation.participants.includes(origenEmail) && conversation.participants.includes(recipientEmail)) {
                    conversationFound = true;
                    conversation.messages.push({
                        id: Date.now(),
                        timestamp: new Date().toLocaleDateString(),
                        sender: origenEmail,
                        recipient: recipientEmail,
                        content: mensaje
                    });
                }
            });

            if (!conversationFound) {
                const newConversation = {
                    id: Date.now(),
                    participants: [origenEmail, recipientEmail],
                    messages: [{
                        id: Date.now(),
                        timestamp: new Date().toLocaleDateString(),
                        sender: origenEmail,
                        recipient: recipientEmail,
                        content: mensaje
                    }]
                };
                conversations.push(newConversation);
            }

            const updateResponse = await fetch(bConversations, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': masterKey
                },
                body: JSON.stringify({ conversations })
            });

            if (!updateResponse.ok) {
                throw new Error('Error al actualizar mensajes');
            }
            setMensaje('');
            setMensajeEnviado(true);
            setOpenModalMsg(false);
        } catch (error) {
            console.error(error);
            alert('Hubo un error al enviar el mensaje');
        }
    };

    return (
        <div>
            <div id="crud-modal" tabIndex="-1" aria-hidden="true" className={`${openModalMsg ? 'block' : 'hidden'} overflow-hidden bg-black/70 overflow-y-auto overflow-x-hidden absolute left-0 top-0 grid place-content-center z-50 justify-center items-center w-screen h-screen`}>
                <div className="relative p-4 w-[40em] overflow-hidden max-w-md">
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
