import React, { createContext, useContext, useState, ReactNode } from "react";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  categoria: string;
  cantidad: number;
}

interface CartContextProps {
  cart: Producto[];
  addToCart: (producto: Producto) => void;
  removeFromCart: (id: number, removeAll?: boolean) => void; // Aquí se hace el cambio
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Producto[]>([]);

  const addToCart = (producto: Producto) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === producto.id);
      if (itemIndex !== -1) {
        const newCart = [...prevCart];
        newCart[itemIndex].cantidad += 1;
        return newCart;
      }
      return [...prevCart, { ...producto, cantidad: 1 }];
    });
  };

  const removeFromCart = (id: number, removeAll: boolean = false) => {
    setCart((prevCart) => {
      if (removeAll) {
        return prevCart.filter((item) => item.id !== id);
      } else {
        return prevCart
          .map((item) => {
            if (item.id === id) {
              return { ...item, cantidad: item.cantidad - 1 };
            }
            return item;
          })
          .filter((item) => item.cantidad > 0); 
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
