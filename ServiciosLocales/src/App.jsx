import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Servicio from './components/Servicio';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ScrollToTop from './funciones/ScrollToTop';
import Servicios from './components/Servicios';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import ServicesClients from './components/ServicesClients';
import InboxUsers from './components/InboxUsers';

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
        <Route path="/" element={<Layout coords={coords} setCoords={setCoords} userActive={userActive} />} >
          <Route index element={<Home />} />
          <Route path="/servicio/id/:id" element={<Servicio coords={coords} setCoords={setCoords} />} />
          <Route path="/servicios" element={<Servicios coords={coords} setCoords={setCoords} />} />
          <Route path="/servicios/:categoria" element={<Servicios coords={coords} setCoords={setCoords} />} />
          <Route path="/register" element={<Register userActive={userActive} />} />
          <Route path="/login" element={<Login userActive={userActive} setUserActive={setUserActive} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/misservicios" element={<ServicesClients />} />
          <Route path="/inbox" element={<InboxUsers />} />
          {userActive && <Route path="/dashboard" element={<Dashboard userActive={userActive} />} /> }
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;