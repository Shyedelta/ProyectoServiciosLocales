import React, { useEffect, useState } from 'react';

function InboxUsers() {
    const [conversations, setConversations] = useState([]);
    const [error, setError] = useState(null);
    const [activeConversation, setActiveConversation] = useState(null);
    const API_URL = "https://api.jsonbin.io/v3/b/6658e97aad19ca34f871d2d3";
    const masterKey = '$2a$10$4FfE4DnGChnGhtxL1fZ7pu59/F1H8lTTdZ0PA1aeltIMWLrmpVW2e';
    const [newMessage, setNewMessage] = useState('');
    const [enviando, setEnviando] = useState(false);  
    useEffect(() => {
        const fetchConversations = async () => {
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

                if (data && data.record && Array.isArray(data.record.conversations)) {
                    setConversations(data.record.conversations);
                } else {
                    throw new Error('Datos no válidos recibidos del servidor');
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchConversations();
    }, []);

    const user = JSON.parse(localStorage.getItem('user'));
    const userEmail = user?.email;

    const userConversations = conversations.filter(conversation =>
        conversation.participants.includes(userEmail)
    );
    const handleSendMessage = async () => {
        try {
            setEnviando(true);  
            const updatedConversations = conversations.map(conversation => {
                if (conversation.id === activeConversation.id) {
                    const newMsg = {
                        id: Date.now(),
                        timestamp: new Date().toLocaleDateString(),
                        sender: userEmail,
                        recipient: activeConversation.participants.find(email => email !== userEmail),
                        content: newMessage
                    };
                    conversation.messages.push(newMsg);
                }
                return conversation;
            });

            const response = await fetch(API_URL, {
                method: 'PUT',
                headers: {
                    'X-Master-Key': masterKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ conversations: updatedConversations })
            });

            if (!response.ok) {
                throw new Error('Error al enviar el mensaje');
            }

            setConversations(updatedConversations);
            setNewMessage('');
        } catch (error) {
            console.error(error);
            alert('Hubo un error al enviar el mensaje');
        } finally {
            setEnviando(false);  
        }
    };

    return (
        <div className='min-h-screen h-full w-full bg-white p-10'>
            {error && <p className='text-red-500'>{error}</p>}
            {userConversations.length === 0 ? (
                <p>No hay mensajes.</p>
            ) : (
                <div className='flex '>
                    <aside id="default-sidebar" className="  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                            <span className="m-3 mb-10 font-bold tracking-wide text-lg">Chats</span> 
                            <ul className="bg-gray-200 p-1 rounded-md">
                                {userConversations.map((conversation, index) => (
                                    <li key={index} className=' m-2 font-medium '>
                                        <a href="#" className="flex items-center py-2 text-gray-600 hover:text-gray-800 rounded-lg bg-gray-300 hover:bg-gray-100   group"
                                            onClick={() => setActiveConversation(conversation)}
                                        >
                                            <span className="ms-3"> {conversation.participants.filter(email => email !== userEmail).join(', ')}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                    <ul className='p-10 bg-gray-200 w-full'>
                        {activeConversation && (
                            <li>
                                <h2 className='bg-green-100 shadow-sm p-2 px-4 rounded-md mb-2'>{activeConversation.participants.filter(email => email !== userEmail).join(', ')}</h2>
                                <ul className='space-y-4 bg-gray-100 shadow rounded-lg p-4 flex flex-col'>
                                    {activeConversation.messages.map((message, index) => (
                                        <li key={index} className='w-max' style={{ alignSelf: message.sender === userEmail ? 'flex-end' : 'flex-start' }}>
                                            <div className={`p-2 px-4 rounded-lg ${message.sender === userEmail ? 'bg-blue-200 self-end' : 'bg-white shadow self-start'}`}>
                                                <span className='block text-sm text-gray-600'>{new Date(message.timestamp).toLocaleDateString()}</span>
                                                <span className='block'>{message.content}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex h-16 items-stretch mt-4">
                                    <textarea className="flex-1 p-2  max-h-min rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none" placeholder="Escribe un mensaje aquí"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)} />
                                    <button className={`ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600${enviando ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        onClick={handleSendMessage}
                                        disabled={enviando}> 
                                        {enviando ? 'Enviando...' : 'Enviar'} 
                                    </button>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default InboxUsers;