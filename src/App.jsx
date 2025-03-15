import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulario from './components/Formulario';
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
