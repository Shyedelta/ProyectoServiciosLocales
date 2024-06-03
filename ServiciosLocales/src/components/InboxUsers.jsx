import React, { useEffect, useState } from 'react';
import defaultImg from "../imgs/default.jpg"

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
        <div className=' h-full w-full bg-white'>
            {error && <p className='text-red-500'>{error}</p>}
            {userConversations.length === 0 ? (
                <p>
                    <div class="flex items-center justify-center w-scree h-screen border bg-gray-800 border-gray-700">
                        <div class="px-4 py-2 text-2xl font-medium leading-none text-center rounded-full animate-pulse bg-blue-900 text-blue-200">loading...</div>
                    </div>
                </p>
            ) : (
                <div className='flex '>
                    <aside id="default-sidebar" className=" top-0 left-0 z-40 w-[28em] h-screen max-h-[93vh] transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-600 border-gray-800 border-r-4 ">
                            <span className="m-3 font-bold text-white tracking-wide text-lg">Chats</span>
                            <ul className="bg-gray-700 p-1 mt-5 mx-2 rounded-2xl  divide-y divide px-5 divide-gray-500">
                                {userConversations.map((conversation, index) => (
                                    <li key={index} className="py-3 cursor-pointer" onClick={() => setActiveConversation(conversation)}>
                                        <div className="flex items-center bg-gray-700 hover:bg-gray-600 p-4 rounded-xl space-x-3 rtl:space-x-reverse">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src={defaultImg} alt="Perfil" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-semibold text-white truncate ">
                                                    {conversation.participants.filter(email => email !== userEmail).join(', ')}                                            </p>
                                                <p className="text-sm text-gray-500 truncate">
                                                    {conversation.participants.filter(email => email !== userEmail).join(', ')}
                                                </p>
                                            </div>
                                           
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                    <ul className='p-10 bg-gray-700 max-h-[93vh] overflow-hidden w-full'>
                        {activeConversation && (
                            <li className='flex flex-col justify-between'>
                                <h2 className='bg-green-100 shadow-sm p-2 px-4 h-fit rounded-md mb-2'>{activeConversation.participants.filter(email => email !== userEmail).join(', ')}</h2>
                                <ul className='space-y-4 bg-gray-600 shadow rounded-lg p-4 flex flex-col h-[72vh] overflow-y-auto'>
                                    {activeConversation.messages.map((message, index) => (
                                        <li key={index} className='w-max' style={{ alignSelf: message.sender === userEmail ? 'flex-end' : 'flex-start' }}>
                                            <div className={`flex flex-col w-full max-w-[460px] leading-1.5 p-4 border-gray-200 shadow ${message.sender === userEmail ? 'bg-blue-200 self-end rounded-l-xl rounded-b-xl ' : 'bg-gray-100 rounded-e-xl rounded-es-xl self-start'}`}>
                                                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                                    <span className="text-sm font-semibold text-gray-900 ">{message.sender}</span>
                                                    <span className="text-sm font-normal text-gray-500">{new Date(message.timestamp).toLocaleDateString()}</span>
                                                </div>
                                                <p className="text-sm font-normal pt-2.5 text-gray-900 ">{message.content}</p>
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