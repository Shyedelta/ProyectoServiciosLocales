import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const API_URL = 'https://api.jsonbin.io/v3/b/66543a29acd3cb34a84e3ff7';
const masterKey = '$2a$10$4FfE4DnGChnGhtxL1fZ7pu59/F1H8lTTdZ0PA1aeltIMWLrmpVW2e';

function Login({ userActive }) {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (userActive?.email == "admin@gmail.com") {
            window.location.href = "/dashboard";
        } else if (userActive?.name !== undefined) {
            window.location.href = "/";
        }
    }, [userActive]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': masterKey
                }
            });

            if (!response.ok) {
                throw new Error('Error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
            }

            const data = await response.json();
            const users = data.record.users;

            const user = users.find((user) => user.email === email && user.password === password);

            if (user) {
                setError(null);
                localStorage.setItem('user', JSON.stringify(user));
                setTimeout(() => {
                    window.location.href = "/";
                }, 2000)

            } else {
                setError('Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error.message);
            setError('Error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <>
            <div className="max-w-md w-full mx-auto overflow-hidden min-h-[90vh] h-full flex flex-col justify-center">
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
                    <form onSubmit={handleSubmit} className="space-y-6 p-8" action="#">
                        <h2 className="text-3xl font-medium text-gray-900 ">Inicia sesión</h2>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electronico</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John.doe@example.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            {error && <div className="text-red-500 text-sm">{error}</div>}
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " />
                                </div>
                                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recuerdame</label>
                            </div>
                            <a href="#" onClick={() => { alert("Hace memoria...") }} className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div>
                            <button className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                type="submit">
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                    <div className="px-8 py-4 bg-gray-100 text-center">
                        <span className="text-gray-600">¿No tienes cuenta? </span>
                        <Link to={"/register"} className="font-medium text-indigo-500 hover:text-indigo-400" >
                            Crear cuenta
                        </Link>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Login;
