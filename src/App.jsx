import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './screens/Form';
import Login from './components/Login';
import Dshboard from './components/Dshboard';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dshboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
