import React, { useEffect, useState } from 'react';
import defaultImg from "../imgs/default.jpg"
import UsersEdit from './admin/UsersEdit';

function ConfigAccount({ userActive, setUserActive }) {
  const API_URL = 'https://api.jsonbin.io/v3/b/66543a29acd3cb34a84e3ff7';
  const masterKey = '$2a$10$4FfE4DnGChnGhtxL1fZ7pu59/F1H8lTTdZ0PA1aeltIMWLrmpVW2e';
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contenido, setContenido] = useState('config');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': masterKey
          }
        });
        const data = await response.json();
        const users = data.record.users;
        setUsers(users);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (userActive) {
      setUser({
        ...user,
        id: userActive.id,
        name: userActive.name,
        lastName: userActive.lastName,
        email: userActive.email,
        password: userActive.password,
        phone: userActive.phone,
        company: userActive.company,
        website: userActive.website
      });
    }
  }, [userActive]);

  const handleUpdateUser = async (updatedUser) => { 
    const updatedUsers = users.map((user) => user.id == updatedUser.id ? updatedUser : user);
    setUsers(updatedUsers);
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': masterKey
        }
      });
      const data = await response.json();

      const putResponse = await fetch(API_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': masterKey
        },
        body: JSON.stringify({
          ...data.record,
          users: updatedUsers
        })
      });

      if (!putResponse.ok) {
        throw new Error('Error al actualizar los datos en el backend');
      }
    } catch (error) {
      console.error('Error al actualizar el backend:', error);
      setError(error);
    }

    localStorage.setItem('user', JSON.stringify(updatedUser));
    const newUserConfig = localStorage.getItem('user');
    setUserActive(newUserConfig);
    window.location.reload();
  };
  const handleMenuClick = (select) => {
    setContenido(select)
  }
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  return (
    <div className='bg-white w-full min-h-screen'>
      <div className='flex flex-col md:flex-row w-full min-h-screen'>
        <div className='bg-gray-100 p-6 shadow-md flex flex-col w-full md:w-1/3 gap-6'>
          <div className='flex flex-col items-center gap-4'>
            <span className='relative flex shrink-0 overflow-hidden shadow rounded-full w-20 h-20'>
              <img src={defaultImg} alt='Foto perfil'  />
            </span>
            <div className='text-center overflow-hidden'>
              <h2 className='text-lg font-semibold uppercase'>{user?.name} {user?.lastName}</h2>
              <p className='text-gray-500 dark:text-gray-400'>{user?.email}</p>
            </div>
          </div>
          <nav className='flex flex-col gap-2'>
            <a href='#' onClick={() => { handleMenuClick('perfil') }} className='flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors' rel='ugc'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'>
                <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
              <span>Perfil</span>
            </a>
            <a href='#' onClick={() => { handleMenuClick('config') }} className='flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors' rel='ugc'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'>
                <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'></path>
                <circle cx='12' cy='12' r='3'></circle>
              </svg>
              <span>Configuración</span>
            </a>
            <a href="#" className='flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors'
              onClick={() => handleMenuClick('logout')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
              </svg>
              <span>Cerrar sesión</span>
            </a>
          </nav>
        </div>
        <div className='bg-white p-6 md:m-10 md:rounded-lg m-0 border w-full'>
          {contenido === 'perfil' &&
            <div>
              <h1 className='text-2xl font-bold m-6'>Perfil</h1>
            </div>}
          {contenido === 'config' &&
            <div>
              <h1 className='text-2xl font-bold m-6'>Configuración de cuenta</h1>
              <UsersEdit user={user} onUpdateUser={handleUpdateUser} />
            </div>}
          {contenido === 'logout' && <div>{localStorage.removeItem('user')}{window.location.href = "/"}</div>}
        </div>
      </div>
    </div>
  );
}

export default ConfigAccount;
