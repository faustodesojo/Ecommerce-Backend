import React, { useState } from "react";
import "./Cart.css";
import { useCart } from "../../pages/cart/CartContext";
import Button from "../../components/UI/Button/Button";
import { IoTrashOutline } from "react-icons/io5";

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [showConfirm, setShowConfirm] = useState(false);

  const handlePurchase = () => {
    setShowConfirm(true);
  };

  const confirmPurchase = (confirm: boolean) => {
    if (confirm) {
      clearCart();
    }
    setShowConfirm(false);
  };

  const totalAmount = cart
    .reduce((total, producto) => {
      return (
        total + producto.cantidad * parseFloat(producto.precio.replace("$", ""))
      );
    }, 0)
    .toFixed(2);

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
                <div className="cart-item-price">
                <p>
                  $
                  {(
                    producto.cantidad *
                    parseFloat(producto.precio.replace("$", ""))
                  ).toFixed(2)}
                </p>
                
                <div className="quantity-controls">
                    <button onClick={() => removeFromCart(producto.id)}>-</button>
                    <span>{producto.cantidad}</span>
                    <button onClick={() => addToCart(producto)}>+</button>
                    <p
                      onClick={() => removeFromCart(producto.id, true)} 
                      className="remove-btn"
                    >
                      <IoTrashOutline />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ul>
          <div className="cart-buttons">
            <button className="purchase-btn" onClick={handlePurchase}>
              Comprar
            </button>
            <button className="clear-cart-btn" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
          <p className="cart-total">Total: ${totalAmount}</p>
        </>
      )}

      {showConfirm && (
        <div className="confirmation-modal">
          <p>¿Desea realizar la compra?</p>
          <div>
          <Button onClick={() => confirmPurchase(true)}>Sí</Button>
          <Button onClick={() => confirmPurchase(false)}>No</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
