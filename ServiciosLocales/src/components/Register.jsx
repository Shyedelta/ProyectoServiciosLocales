import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import { Link } from 'react-router-dom';

const masterKey = "$2a$10$4FfE4DnGChnGhtxL1fZ7pu59/F1H8lTTdZ0PA1aeltIMWLrmpVW2e";
const bUsers = "66543a29acd3cb34a84e3ff7";

const Register = ({ userActive }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordtwo: ''
    });

    useEffect(() => { 
        if (userActive?.name !== undefined) {
            window.location.href = "/";
        }
    }, [userActive]);

    const [usuarioCreado, setUsuarioCreado] = useState(false);
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getReq = new XMLHttpRequest();

        getReq.onreadystatechange = () => {
            if (getReq.readyState === XMLHttpRequest.DONE) {
                if (getReq.status === 200) {
                    const responseData = JSON.parse(getReq.responseText);
                    const existingData = responseData.record || {};
                    setUsers(existingData.users || []);
                } else {
                    console.error('Error al obtener datos:', getReq.responseText);
                }
            }
        };

        getReq.open("GET", `https://api.jsonbin.io/v3/b/${bUsers}`, true);
        getReq.setRequestHeader("X-Master-Key", masterKey);
        getReq.send();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.passwordtwo) {
            setError("Las contraseñas no coinciden");
            return;
        }

        const existingUser = users.find(user => user.email === formData.email);
        if (existingUser) {
            setError("Ya existe un usuario con este correo electrónico.");
            return;
        }

        const userData = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            password: formData.password
        };

        const existingData = { users: [...users, userData] };

        const putReq = new XMLHttpRequest();
        putReq.onreadystatechange = () => {
            if (putReq.readyState === XMLHttpRequest.DONE) {
                if (putReq.status === 200) {
                    setUsuarioCreado(true);
                } else {
                    console.error('Error al actualizar datos:', putReq.responseText);
                }
            }
        };

        putReq.open("PUT", `https://api.jsonbin.io/v3/b/${bUsers}`, true);
        putReq.setRequestHeader("Content-Type", "application/json");
        putReq.setRequestHeader("X-Master-Key", masterKey);
        putReq.send(JSON.stringify(existingData));

        setFormData({ name: '', email: '', password: '', passwordtwo: '' });
    };


    return (
        <>
            <div className="max-w-md w-full mx-auto overflow-hidden h-full flex flex-col justify-center">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-center text-3xl font-medium text-gray-700">
                            Crea una cuenta
                        </h2>
                        <p className="mt-4 text-center text-gray-600">Accede a todas nuestras funciones</p>
                        <form method="POST" action="#" className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div className="rounded-md shadow-sm">
                                <div className='mb-4'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name" >Nombre</label>
                                    <input
                                        placeholder="John"
                                        className="appearance-none relative block w-full px-3 py-3 border border-gray-300 bg-gray-50 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        required autoComplete="name" type="text" name="name" id="name"
                                        value={formData.name} onChange={handleChange}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Correo electronico</label>
                                    <input
                                        placeholder="John.doe@example.com"
                                        className="appearance-none relative block w-full px-3 py-3 border border-gray-300 bg-gray-50 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        required autoComplete="email" type="email" name="email" id="email"
                                        value={formData.email} onChange={handleChange}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="password">Contraseña</label>
                                    <input
                                        placeholder="•••••••••"
                                        className="appearance-none relative block w-full px-3 py-3 border border-gray-300 bg-gray-50 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        required autoComplete="current-password"
                                        type="password" name="password" id="password"
                                        value={formData.password} onChange={handleChange}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="passwordtwo">Repetir contraseña</label>
                                    <input
                                        placeholder="•••••••••"
                                        className="appearance-none relative block w-full px-3 py-3 border border-gray-300 bg-gray-50 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        required autoComplete="current-password"
                                        type="password" name="passwordtwo" id="passwordtwo"
                                        value={formData.passwordtwo} onChange={handleChange}
                                    />
                                </div>
                            </div>
                            {error && <div className="text-red-500">{error}</div>}
                            <div>
                                <button className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    type="submit">
                                    Registrar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="px-8 py-4 bg-gray-100 text-center">
                        <span className="text-gray-600">¿Ya tienes una cuenta? </span>
                        <Link to={"/login"} className="font-medium text-indigo-500 hover:text-indigo-400" >
                            Inicia sesión
                        </Link>
                    </div>
                </div>
            </div>
            {usuarioCreado &&
                <>
                    <Toast text={"Usuario creado."} onClose={false} />
                    {setTimeout(() => { window.location.href = "/login" }, 1000)}
                </>
            }
        </>
    );
}

export default Register;
