import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  categoria: string;
}

interface CartContextProps {
  cart: Producto[];
  addToCart: (producto: Producto) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Producto[]>([]);

  const addToCart = (producto: Producto) => {
    setCart((prevCart) => [...prevCart, producto]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
