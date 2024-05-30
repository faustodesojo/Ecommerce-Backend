import React from 'react';
import { useCart } from '../../pages/cart/CartContext';

const Cart: React.FC = () => {
  const { cart } = useCart();

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - {producto.precio}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
