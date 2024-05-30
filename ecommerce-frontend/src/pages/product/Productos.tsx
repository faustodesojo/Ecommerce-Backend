// Productos.tsx
import React, { useState } from 'react';
import { productos } from '../../data/produtosData';
import './Productos.css';
import { useCart } from '../../pages/cart/CartContext';
import Button from '../../components/UI/Button/Button';

const Productos: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [productosMostrados, setProductosMostrados] = useState<number>(8);
  const { addToCart } = useCart();

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((producto) => producto.categoria === categoriaSeleccionada)
    : productos;

  const productosVisibles = productosFiltrados.slice(0, productosMostrados);

  const categorias = Array.from(new Set(productos.map((producto) => producto.categoria)));

  const cargarMasProductos = () => {
    setProductosMostrados(productosMostrados + 8);
  };

  return (
    <div className="productos-page">
      <div className="productos-titulo">
      <h1>Nuestros Productos</h1>
      </div>
      <p className="productos-descripcion">
        Ofrecemos una amplia variedad de productos para la seguridad perimetral, incluyendo:
        piches de seguridad, concertina, postes, tejido y accesorios.
      </p>

      <div className="categorias-container">
        <h2>Categorías</h2>
        <ul className="categorias-lista">
          {categorias.map((categoria) => (
            <li key={categoria}>
              <Button onClick={() => setCategoriaSeleccionada(categoria)}>{categoria}</Button>
            </li>
          ))}
          <li>
            <Button onClick={() => setCategoriaSeleccionada(null)}>Todos</Button>
          </li>
        </ul>
      </div>
      <div className="productos-container">
        {productosVisibles.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={`./images/${producto.imagen}`} alt={producto.nombre} className="producto-imagen" />
            <h3 className="producto-nombre">{producto.nombre}</h3>
            <p className="producto-descripcion">{producto.descripcion}</p>
            <span className="producto-precio">{producto.precio}</span>
            <Button onClick={() => addToCart(producto)}>Agregar al Carrito</Button>
          </div>
        ))}
      {productosVisibles.length < productosFiltrados.length && (
        <div className="ver-mas-container">
          <Button onClick={cargarMasProductos}>Ver más</Button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Productos;
