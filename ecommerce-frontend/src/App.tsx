import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import AppRoutes from './routes/routes';
import { CartProvider } from './pages/cart/CartContext';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </Router>
  );
};

export default App;
