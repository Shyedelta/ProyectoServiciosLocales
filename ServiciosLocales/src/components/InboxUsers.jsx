import React, { useEffect, useState } from 'react';

function InboxUsers() {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);
    const API_URL = "https://api.jsonbin.io/v3/b/6658e97aad19ca34f871d2d3";
    const masterKey = '$2a$10$4FfE4DnGChnGhtxL1fZ7pu59/F1H8lTTdZ0PA1aeltIMWLrmpVW2e';

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch(API_URL, {
                    headers: {
                        'X-Master-Key': masterKey,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Error al acceder a la base de datos');
                }

                const data = await response.json();

                if (data && data.record && Array.isArray(data.record.messages)) {
                    setMessages(data.record.messages);
                } else {
                    throw new Error('Datos no válidos recibidos del servidor');
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchMessages();
    }, []);

    const user = JSON.parse(localStorage.getItem('user'));
    const userEmail = user?.email;

    const filteredMessages = messages.filter(message => message.destino === userEmail);

    return (
        <div className='min-h-screen h-full w-full bg-white p-10'>
            <h1 className='text-2xl font-bold mb-4'>Inbox {user.name}</h1>
            {error && <p className='text-red-500'>{error}</p>}
            {filteredMessages.length === 0 ? (
                <p>No hay mensajes.</p>
            ) : (
                <div className=''>
                    <ul>
                        {filteredMessages.map((message, messageIndex) => (
                            <li key={messageIndex} className='mb-4 '>
                                <h2 className='font-semibold mb-2'>Para: {message.destino}</h2>
                                <ul className='space-y-4 '>
                                    {message.chats.map((chat, chatIndex) => (
                                        <li key={chatIndex} className='bg-gray-100 shadow rounded-lg p-4'>
                                            <h3 className='font-semibold mb-1'>De: {chat.origen}</h3>
                                            <ul className='space-y-2 flex flex-col w-full'>
                                                {chat.msg.map((msg, msgIndex) => (
                                                    <li 
                                                        key={msgIndex} 
                                                        className={`p-2 px-4 rounded-lg  ${chat.origen === userEmail ? 'bg-blue-200 self-end' : 'bg-white shadow self-start'}`}
                                                        style={{ maxWidth: '60%', alignSelf: chat.origen === userEmail ? 'flex-end' : 'flex-start' }}
                                                    >
                                                        <span className='block text-sm text-gray-600'>{msg.date}</span>
                                                        <span className='block'>{msg.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default InboxUsers;

