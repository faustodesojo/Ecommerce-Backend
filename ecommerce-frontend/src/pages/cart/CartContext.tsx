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
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Producto[]>([]);

  const addToCart = (producto: Producto) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === producto.id);
      if (itemIndex !== -1) {
        // Si el producto ya está en el carrito, aumentar la cantidad
        const newCart = [...prevCart];
        newCart[itemIndex].cantidad += 1;
        return newCart;
      }
      // Si no está, agregarlo con cantidad 1
      return [...prevCart, { ...producto, cantidad: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const newCart = [...prevCart];
        if (newCart[itemIndex].cantidad > 1) {
          // Si la cantidad es mayor que 1, reducirla
          newCart[itemIndex].cantidad -= 1;
        } else {
          // Si la cantidad es 1, eliminar el producto del carrito
          newCart.splice(itemIndex, 1);
        }
        return newCart;
      }
      return prevCart;
    });
  };

  const clearCart = () => {
    setCart([]); // Vaciar el carrito
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
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
