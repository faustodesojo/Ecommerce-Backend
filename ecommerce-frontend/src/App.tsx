import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Navbar from './components/navbar/navbar';
import Contacto from './pages/contacto/Contacto';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
