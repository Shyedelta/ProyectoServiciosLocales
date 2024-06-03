import React, { useEffect, useState } from 'react';
import ModalConfirmDelete from "./ModalConfirmDelete"
import UsersEdit from './UsersEdit';
import CardUsers from './CardUsers';

function DashboardUsers() {
  const API_URL = 'https://api.jsonbin.io/v3/b/66543a29acd3cb34a84e3ff7';
  const masterKey = '$2a$10$4FfE4DnGChnGhtxL1fZ7pu59/F1H8lTTdZ0PA1aeltIMWLrmpVW2e';
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [editUser, setEditUser] = useState(null);

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

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleDeleteUser = (id) => {
    setDeleteUserId(id);
  };

  const confirmDeleteUser = async () => {
    try {
      const userIdToDelete = users.find(x => x.id == deleteUserId).id;
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': masterKey
        }
      });

      const data = await response.json();
      const existingUsers = data.record.users;

      const updatedUsers = existingUsers.filter(user => user.id !== userIdToDelete);

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

      if (putResponse.ok) {
        setUsers(updatedUsers);
      } else {
        throw new Error('Error al actualizar los datos');
      }

      setDeleteUserId(null);
      window.location.reload();
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      setError(error);
    }
  };

  const handleEditUser = (user) => {
    setEditUser(user);
  };
  const handleUpdateUser = async (updatedUser) => {
    const updatedUsers = users.map((user) => user.id === updatedUser.id ? updatedUser : user);
    setUsers(updatedUsers);
    setEditUser(null);
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
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  const filteredUsers = users.filter(user => user.email !== "admin@gmail.com");

  return (
    <div className=' flex w-full h-screen flex-wrap justify-start content-start gap-10'>
      {editUser ? (
        <UsersEdit user={editUser} onUpdateUser={handleUpdateUser} onCancel={() => setEditUser(null)} />
      ) : (
        filteredUsers.length === 0 ? (
          <div>No hay usuarios disponibles.</div>
        ) : (
          filteredUsers.map((user, index) => (
            <CardUsers
              user={user}
              handleDeleteUser={handleDeleteUser}
              handleDropdownToggle={handleDropdownToggle}
              handleEditUser={handleEditUser}
              key={user.id}
              index={index}
              openDropdownIndex={openDropdownIndex}
            />
          ))
        )
      )}
      <div className="h-max w-60 bg-white/50 border-gray-200 border-4 border-dashed rounded-lg shadow ">
        <div className="grid place-content-center p-4 text-gray-200 scale-125 h-[330px] ">
          <div className='cursor-pointer p-12 py-16 '>
          <svg width={120} height={120} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 12H16M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </div>
        </div>
      </div>
      {(deleteUserId != null || deleteUserId != undefined) && (
        <ModalConfirmDelete setDeleteUserId={setDeleteUserId} confirmDeleteUser={confirmDeleteUser} />
      )}
    </div>
  )
}
export default DashboardUsers;
