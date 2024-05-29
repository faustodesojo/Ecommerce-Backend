import React, { useState } from 'react';
import { productos } from '../../data/produtosData';
import './Productos.css';

const Productos: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [productosMostrados, setProductosMostrados] = useState<number>(8);

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
      <div  className="productos-titulo">
      <h1>Productos</h1>
      </div>
      <p className="productos-descripcion">
        Ofrecemos una amplia variedad de productos para la seguridad perimetral elaborados con la mejor mercaderia
      </p>

      <div className="categorias-container">
        <h2>Categorías</h2>
        <ul className="categorias-lista">
          {categorias.map((categoria) => (
            <li key={categoria}>
              <button onClick={() => setCategoriaSeleccionada(categoria)}>{categoria}</button>
            </li>
          ))}
          <li>
            <button onClick={() => setCategoriaSeleccionada(null)}>Todos</button>
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
            <button className="producto-boton">Agregar al Carrito</button>
          </div>
        ))}
      </div>
      {productosVisibles.length < productosFiltrados.length && (
        <div className="ver-mas-container">
          <button className="ver-mas-boton" onClick={cargarMasProductos}>Ver más</button>
        </div>
      )}
    </div>
  );
};

export default Productos;
