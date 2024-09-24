import React from "react";
import "./Cart.css";
import { useCart } from "../../pages/cart/CartContext";

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cart.map((producto) => (
              <div key={producto.id} className="cart-item">
                <img
                  src={`./images/${producto.imagen}`}
                  alt={producto.nombre}
                />
                <p>{producto.nombre}</p>
                <p>
                  Precio Unitario: ${producto.precio} x {producto.cantidad} = $
                  {(
                    producto.cantidad *
                    parseFloat(producto.precio.replace("$", ""))
                  ).toFixed(2)}
                </p>
                <div className="quantity-controls">
                  <button onClick={() => removeFromCart(producto.id)}>-</button>
                  <span>{producto.cantidad}</span>
                  <button onClick={() => addToCart(producto)}>+</button>
                </div>
              </div>
            ))}
          </ul>
          <button className="clear-cart-btn" onClick={clearCart}>
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
