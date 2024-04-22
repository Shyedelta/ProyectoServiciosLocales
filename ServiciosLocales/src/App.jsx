import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Servicio from './components/Servicio';
import Home from './components/Home';

function App() {
  const [coords, setCoords] = useState(null);

  return (
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Layout coords={coords} setCoords={setCoords}/>} >
            <Route index element={<Home />} /> 
            <Route path="/servicios/id/:id" element={<Servicio coords={coords}/>} />
          </Route>
        </Routes> 
    </BrowserRouter>
  );
}

export default App;