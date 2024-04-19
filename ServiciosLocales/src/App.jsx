import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Servicio from './components/Servicio';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} /> 
            <Route path="/servicios/id/:id" element={<Servicio />} />
          </Route>
        </Routes> 
    </BrowserRouter>
  );
}

export default App;