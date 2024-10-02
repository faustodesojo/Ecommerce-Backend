import React, { useState, useEffect } from "react";
import { productos } from "../../data/produtosData";
import "./Productos.css";
import { useCart } from "../../pages/cart/CartContext";
import Button from "../../components/UI/Button/Button";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Productos: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<
    string | null
  >(null);
  const [productosMostrados, setProductosMostrados] = useState<number>(4);
  const [imagenZoom, setImagenZoom] = useState<string | null>(null);
  const { addToCart } = useCart();
  const [mostrarPopup, setMostrarPopup] = useState<boolean>(false);
  const [productoAgregado, setProductoAgregado] = useState<{
    nombre: string;
    imagen: string;
  } | null>(null);
  const [cantidades, setCantidades] = useState<{ [key: number]: number }>({});

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.categoriaSeleccionada) {
      setCategoriaSeleccionada(location.state.categoriaSeleccionada);
    }
  }, [location.state]);

  useEffect(() => {
    window.scrollTo(0, 600);
  }, [categoriaSeleccionada]);

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(
        (producto) => producto.categoria === categoriaSeleccionada
      )
    : productos;

  const productosVisibles = productosFiltrados.slice(0, productosMostrados);

  const categorias = Array.from(
    new Set(productos.map((producto) => producto.categoria))
  );

  const cargarMasProductos = () => {
    setProductosMostrados(productosMostrados + 4);
  };

  const abrirImagenZoom = (imagen: string) => {
    setImagenZoom(imagen);
  };

  const cerrarImagenZoom = () => {
    setImagenZoom(null);
  };

  const handleAddToCart = (producto: any) => {
    const cantidad = cantidades[producto.id] || 1; // Si no hay cantidad, se asigna 1
    for (let i = 0; i < cantidad; i++) {
      addToCart(producto);
    }
    setProductoAgregado({ nombre: producto.nombre, imagen: producto.imagen });
    setMostrarPopup(true);

    setTimeout(() => {
      setMostrarPopup(false);
    }, 3500);
  };

  const handleCantidadChange = (id: number, value: number) => {
    setCantidades((prev) => ({ ...prev, [id]: value }));
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
            <div className="producto-precio">
              <span>{producto.precio}</span>
              <input
                type="number"
                min="1"
                defaultValue="1"
                onChange={(e) =>
                  handleCantidadChange(producto.id, Number(e.target.value))
                }
              />
            </div>
            <Button onClick={() => handleAddToCart(producto)}>
              Agregar al Carrito
            </Button>
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

      {mostrarPopup && productoAgregado && (
        <div className={`popup ${mostrarPopup ? "visible" : ""}`}>
          <img
            src={`./images/${productoAgregado.imagen}`}
            alt={productoAgregado.nombre}
            className="popup-imagen"
          />
          <p>{productoAgregado.nombre} ha sido agregado al carrito</p>
        </div>
      )}
    </div>
  );
};

export default Productos;
