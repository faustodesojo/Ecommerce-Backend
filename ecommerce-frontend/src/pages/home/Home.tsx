import React from "react";
import "./Home.css";
import { productos } from "../../data/produtosData";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const getFirstProductByCategory = () => {
    const categories = new Set<string>();
    const firstProducts: (typeof productos)[0][] = [];

    productos.forEach((producto) => {
      if (!categories.has(producto.categoria)) {
        categories.add(producto.categoria);
        firstProducts.push(producto);
      }
    });

    return firstProducts;
  };

  const firstProducts = getFirstProductByCategory();

  const handleCategoryClick = (categoria: string) => {
    navigate("/productos", { state: { categoriaSeleccionada: categoria } });
  };

  return (
    <div>
      <div className="banner-section"></div>

      <div className="production-section">
        <h2>Nuestra Producción</h2>
        <p>
          Somos una empresa dedicada a la fabricación de productos de alambrado,
          tanto de postes de hormigon como de tejido roomboidal. Contamos con
          materiales de primera calidad y mano de obra especializada.
        </p>
        <ul>
          <div className="production-item">
            <li>Postes de Hormigón</li>
            <img
              src="images/produccion-hormigon.jpg"
              alt="Postes de Hormigón"
            />
            <p>
              En nuestra empresa, fabricamos postes de hormigón de primera
              calidad para alambrado romboidal utilizando los mejores materiales
              y técnicas disponibles. Empleamos cemento Portland como
              aglutinante principal, garantizando cohesión y resistencia.
              Nuestros agregados, una mezcla de arena, grava y piedra triturada,
              proporcionan una estructura sólida y una resistencia mecánica
              superior.{" "}
            </p>
          </div>
          <div className="production-item">
            <li>Tejido Romboidal</li>
            <img src="images/tejido-produccion.jpg" alt="Tejido Romboidal" />
            <p>
              En nuestra empresa, producimos tejido romboidal de primera calidad
              utilizando materiales y procesos de vanguardia. Empleamos alambre
              de acero galvanizado de alta resistencia para garantizar
              durabilidad y protección contra la corrosión. Nuestro proceso de
              fabricación incluye el trenzado preciso de los alambres para
              formar una malla uniforme y resistente, con rombos perfectamente
              definidos. Utilizamos maquinaria de última generación que dobla
              las puntas del tejido, garantizando una mayor seguridad y evitando
              bordes afilados.
            </p>
          </div>
        </ul>
      </div>

      <div className="product-section">
        <h2>Productos Destacados</h2>
        <div className="products-grid">
          {firstProducts.map((producto) => (
            <div key={producto.id} className="product-card">
              <h3>{producto.nombre}</h3>
              <img
                src={`images/${producto.imagen}`}
                alt={producto.nombre}
                className="product-image"
              />
              <p>{producto.descripcion}</p>
              <p>{producto.precio}</p>
              <Button onClick={() => handleCategoryClick(producto.categoria)}>
                Ver más {producto.categoria}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
