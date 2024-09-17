import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import AppRoutes from './routes/routes';
import { CartProvider } from './pages/cart/CartContext';
import './App.css';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <CartProvider>
        <AppRoutes />
      </CartProvider>
      <Footer />
    </Router>
  );
};

export default App;
