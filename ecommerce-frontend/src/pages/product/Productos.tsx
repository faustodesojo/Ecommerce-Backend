import React, { useState, useEffect } from "react";
import { productos } from "../../data/produtosData";
import "./Productos.css";
import { useCart } from "../../pages/cart/CartContext";
import Button from "../../components/UI/Button/Button";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { useLocation } from "react-router-dom"; 

const Productos: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [productosMostrados, setProductosMostrados] = useState<number>(4);
  const [imagenZoom, setImagenZoom] = useState<string | null>(null);
  const { addToCart } = useCart();


  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.categoriaSeleccionada) {
      setCategoriaSeleccionada(location.state.categoriaSeleccionada);
    }
  }, [location.state]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoriaSeleccionada]);

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((producto) => producto.categoria === categoriaSeleccionada)
    : productos;

  const productosVisibles = productosFiltrados.slice(0, productosMostrados);

  const categorias = Array.from(new Set(productos.map((producto) => producto.categoria)));

  const cargarMasProductos = () => {
    setProductosMostrados(productosMostrados + 4);
  };

  const abrirImagenZoom = (imagen: string) => {
    setImagenZoom(imagen);
  };

  const cerrarImagenZoom = () => {
    setImagenZoom(null);
  };

  return (
    <div className="productos-page">
      <div className="productos-titulo">
        <h1>Nuestros Productos</h1>
        <p className="productos-descripcion">
          Ofrecemos una amplia variedad de productos para la seguridad
          perimetral, incluyendo: piches de seguridad, concertina, postes,
          tejido y accesorios.
        </p>
      </div>

      <div className="categorias-container">
        <h2>Categorías</h2>
        <ul className="categorias-lista">
          <li>
            <Button onClick={() => setCategoriaSeleccionada(null)}>
              Todos
            </Button>
          </li>
          {categorias.map((categoria) => (
            <li key={categoria}>
              <Button onClick={() => setCategoriaSeleccionada(categoria)}>
                {categoria}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="productos-container">
        {productosVisibles.map((producto) => (
          <div key={producto.id} className="producto-card">
            <span
              className="icono-lupa"
              onClick={() => abrirImagenZoom(`./images/${producto.imagen}`)}
            >
              <FaMagnifyingGlassPlus />
            </span>
            <div className="imagen-container">
              <img
                src={`./images/${producto.imagen}`}
                alt={producto.nombre}
                className="producto-imagen"
              />
            </div>
            <h3 className="producto-nombre">{producto.nombre}</h3>
            <p className="producto-descripcion">{producto.descripcion}</p>
            <span className="producto-precio">{producto.precio}</span>
            <Button onClick={() => addToCart(producto)}>Agregar al Carrito</Button>
          </div>
        ))}
      </div>

      {productosVisibles.length < productosFiltrados.length && (
        <div className="ver-mas-container">
          <Button onClick={cargarMasProductos}>Ver más</Button>
        </div>
      )}

      {imagenZoom && (
        <div className="modal" onClick={cerrarImagenZoom}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={imagenZoom} alt="Zoom" className="imagen-zoom" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;
