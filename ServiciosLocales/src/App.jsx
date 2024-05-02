import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Servicio from './components/Servicio';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ScrollToTop from './funciones/ScrollToTop';
import Servicios from './components/Servicios';

function App() {
  const [coords, setCoords] = useState(null);
  useEffect(() => {
    window.history.scrollRestoration = 'auto'
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout coords={coords} setCoords={setCoords} />} >
          <Route index element={<Home />} />
          <Route path="/servicio/id/:id" element={<Servicio coords={coords} setCoords={setCoords} />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;