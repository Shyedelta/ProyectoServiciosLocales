import React, { useState, useEffect } from 'react';

function UsersEdit({ user, onUpdateUser, onCancel }) {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        lastName: '',
        company: '',
        phone: '',
        website: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                id: user.id || '',
                name: user.name || '',
                lastName: user.lastName || '',
                company: user.company || '',
                phone: user.phone || '',
                website: user.website || '',
                email: user.email || '',
                password: user.password || ''
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
         setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUser({ ...user, ...formData });
    };

    return (
        <div className='bg-white/20 p-5 px-6 rounded-2xl w-full'>
            <form onSubmit={handleSubmit}>
                {onCancel &&
                    <div className='mb-6'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">ID:</label>
                        <input type="text" id="id" name="id"
                            value={formData.id} disabled
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                }
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                        <input type="text" id="name" name="name"
                            value={formData.name} onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Apellido</label>
                        <input type="text" id="lastName" name="lastName"
                            value={formData.lastName} onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Doe" />
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Empresa</label>
                        <input type="text" id="company" name="company"
                            value={formData.company} onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="ServiciosLocales" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Teléfono</label>
                        <input type="tel" id="phone" name="phone"
                            value={formData.phone} onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="123-45-678" />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">Sitio web</label>
                    <input type="url" id="website" name="website"
                        value={formData.website} onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="ServiciosLocales.vercel.app" />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Correo electrónico</label>
                    <input type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="John.doe@example.com" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                    <input type="password" id="password" name="password"
                        value={formData.password} onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="•••••••••" />
                </div>
                <div className="flex justify-between">
                    {onCancel &&
                        <button type="button" onClick={onCancel}
                            className="text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-2" >
                            Cancelar
                        </button>
                    }
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UsersEdit;
