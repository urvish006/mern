import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar.jsx'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Service from './Pages/Service.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <>
    <div className='bg-gray-900 w-full h-screen text-blue-500'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
};

export default App;