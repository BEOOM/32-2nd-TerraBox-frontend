import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Detail from './pages/Detail/Detail';
import Booking from './pages/Booking/Booking';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;