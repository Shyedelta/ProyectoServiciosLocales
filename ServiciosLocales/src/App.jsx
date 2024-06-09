import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Estructura/Layout';
import Servicio from './components/Secciones/Servicio';
import Home from './components/Secciones/Home';
import NotFound from './components/NotFound';
import ScrollToTop from './funciones/ScrollToTop';
import Servicios from './components/Secciones/Servicios';
import Register from './components/Secciones/Register';
import Login from './components/Secciones/Login';
import Dashboard from './components/admin/Dashboard';
import Contact from './components/Secciones/Contact';
import ServicesClients from './components/Secciones/ServicesClients';
import InboxUsers from './components/Secciones/InboxUsers';
import ConfigAccount from './components/Secciones/ConfigAccount';
import CreateService from './components/Secciones/CreateService';

function App() {
  const [coords, setCoords] = useState(null);
  const [userActive, setUserActive] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserActive(JSON.parse(storedUser));
    }
    window.history.scrollRestoration = 'auto';
  }, []); 
   
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout userActive={userActive} />} >
          <Route index element={<Home userActive={userActive} />} />
          <Route path="/servicio/id/:id" element={<Servicio coords={coords} setCoords={setCoords} />} />
          <Route path="/servicios" element={<Servicios coords={coords} setCoords={setCoords} />} />
          <Route path="/servicios/:categoria" element={<Servicios coords={coords} />} />
          <Route path="/register" element={<Register userActive={userActive} />} />
          <Route path="/login" element={<Login userActive={userActive} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/misservicios" element={<ServicesClients />} />
          <Route path="/inbox" element={<InboxUsers />} />
          <Route path="/config" element={<ConfigAccount userActive={userActive} setUserActive={setUserActive} />} />
          <Route path="/createservice" element={<CreateService coords={coords} setCoords={setCoords} />} />
          {userActive && <Route path="/dashboard" element={<Dashboard userActive={userActive} />} />}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;