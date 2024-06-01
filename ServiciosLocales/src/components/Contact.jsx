import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        apellido: '',
        email: '',
        number: '',
        message: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const API_URL = "https://api.jsonbin.io/v3/b/66589ac1ad19ca34f871abe5";
    const masterKey = '$2a$10$4FfE4DnGChnGhtxL1fZ7pu59/F1H8lTTdZ0PA1aeltIMWLrmpVW2e';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newMessage = {
            msj: formData.message,
            date: new Date().toLocaleDateString('es-ES')
        };

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
            console.log(JSON.stringify(data))
            if (!data.record || !data.record.messajes) {
                throw new Error('La respuesta de la API no tiene la estructura esperada');
            }

            const messages = data.record.messajes;
            const userIndex = messages.findIndex(user => user.email === formData.email);

            if (userIndex !== -1) {
                // El usuario ya existe, agregamos el mensaje al array existente
                messages[userIndex].mensajes.push(newMessage);
            } else {
                // El usuario no existe, lo agregamos con su mensaje
                messages.push({
                    name: formData.name,
                    apellido: formData.apellido,
                    email: formData.email,
                    number: formData.number,
                    mensajes: [newMessage]
                });
            }

            // Ahora actualizamos los mensajes en la API
            const updateResponse = await fetch(API_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': masterKey
                },
                body: JSON.stringify({ messajes: messages })
            });

            if (!updateResponse.ok) {
                throw new Error('Error al actualizar mensajes');
            }

            setSuccess('Mensaje enviado con éxito.');
            setError(null);
            setFormData({
                name: '',
                apellido: '',
                email: '',
                number: '',
                message: ''
            });
        } catch (error) {
            setError('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
            console.log(error)
            setSuccess(null);
        }
    };



    return (
        <div className="flex flex-col-reverse 2xl:flex-row min-h-screen border-x ">
            <div className="w-full h-full bg-gray-100 bg-[url('./imgs/bgcontact.jpg')]  bg-bottom bg-cover bg-no-repeat ">
                <div className='bg-black/50 w-full h-full grid place-content-center '>
                    <div className="p-10 overflow-hidden ">
                        <div >
                            <h2 className="text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl">Estamos aquí para ayudarte</h2>
                            <p className="my-10 text-lg leading-8 text-gray-200">¡Ponte en contacto con nosotros! Estamos aquí para ayudarte en lo que necesites.</p>
                        </div>

                        <div className="my-6 text-gray-100">
                            <div className="flex items-center mb-4">
                                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                <p className="mx-2">Toledo, IES Azarquiel</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                <p className="mx-2">+1 (234) 567-8901</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                <p className="mx-2">support@servicioslocales.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 px-10 py-24 w-full ">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contáctanos</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        ¡Conéctate con nosotros! Estamos aquí para ayudarte.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Nombre
                            </label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="block mt-2.5 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div>
                            <label htmlFor="apellido" className="block text-sm font-semibold leading-6 text-gray-900">
                                Apellido
                            </label>
                            <input type="text" name="apellido" id="apellido" value={formData.apellido} onChange={handleChange} className="block mt-2.5 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} autoComplete="email" className="block mt-2.5 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="number" className="block text-sm font-semibold leading-6 text-gray-900" onChange={handleChange}>
                                Telefono
                            </label>
                            <input type="text" name="number" id="number" value={formData.number} onChange={handleChange} className="block mt-2.5 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Mensaje
                            </label>
                            <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="block mt-2.5 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="mt-10">
                        <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Enviar
                        </button>
                    </div>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                    {success && <p className="text-green-500 mt-4">{success}</p>}
                </form>
            </div>
        </div>
    );
}

export default Contact;


