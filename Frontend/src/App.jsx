import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Service from './Pages/Service.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <div className='bg-gray-900 w-full min-h-screen text-blue-500'>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
