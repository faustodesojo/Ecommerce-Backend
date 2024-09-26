import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Productos from '../pages/product/Productos';
import Contacto from '../pages/contacto/Contacto';
import Cart from '../pages/cart/Cart';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos/" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
};

export default AppRoutes;
