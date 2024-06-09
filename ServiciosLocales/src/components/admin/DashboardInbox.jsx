import React, { useEffect, useState } from 'react';
import { masterKey, bContact } from '../../funciones/constantes.js'; 

function DashboardInbox() {
    const [messages, setMessages] = useState([]);
    const [filteredMessages, setFilteredMessages] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); 

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch(bContact, {
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
                setMessages(data.record.messages);
                setFilteredMessages(data.record.messages);
            } catch (error) {
                setError('Error al obtener mensajes. Por favor, inténtalo de nuevo más tarde.');
            }
        };

        fetchMessages();
    }, []);

    useEffect(() => {
        const results = messages.filter(message =>
            message.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMessages(results);
    }, [searchTerm, messages]);

    return (
        <div>
            <div className='flex justify-between mb-5'>
                <h1 className='text-3xl tracking-wider font-semibold py-1'>Inbox</h1>
                <div className='flex items-center'>
                    <input
                        type="text" placeholder='Buscar un usuario' value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='border-1 border-gray-200 rounded-sm p-1'
                    />
                </div>
            </div>
            {error && <p>{error}</p>}
            <ul>
                {filteredMessages.map((message, index) => (
                    <li key={index} className='mb-4 bg-gray-200 overflow-hidden rounded-xl'>
                        <div className='border-2 overflow-hidden min-w-[20em] border-gray-200 border-dashed rounded-xl p-5'>
                            <p><strong>Usuario:</strong> {message.name} {message.apellido}</p>
                            <p><strong>Email:</strong> {message.email}</p>
                            {message.mensajes.map((msg, idx) => (
                                <fieldset key={idx} className=' max-h-[15em] border-2 bg-gray-100 border-gray-300 border-dashed rounded-xl p-2 my-2'>
                                    <legend className=' px-2 text-gray-900'><strong>Mensaje {idx + 1}</strong> / Fecha: {msg.date}</legend>
                                    <div className='w-full p-2 rounded-md'>
                                        <p>{msg.msj}</p>
                                    </div>
                                </fieldset>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DashboardInbox;
