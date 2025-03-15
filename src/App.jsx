import React, { useState } from 'react';
import './App.css';
import Form from './screens/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulario from './components/Formulario';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Se mantiene el componente <Form/> de la versión anterior */}
      <Form />
    </BrowserRouter>
  );
}

export default App;
