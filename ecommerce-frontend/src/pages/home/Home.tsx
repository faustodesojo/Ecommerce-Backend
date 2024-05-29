import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <div className="banner-section">
      </div>

      <div className="production-section">
        <h2>Nuestra Producción</h2>
        <ul>
          <div className="production-item">
            <li>Postes de Hormigón</li>
            <img src="images/produccion-hormigon.jpg" alt="Postes de Hormigón" />
          </div>
          <div className="production-item">
            <li>Tejido Romboidal</li>
            <img src="images/tejido-produccion.jpg" alt="Tejido Romboidal" />
          </div>
          {/* Agrega más categorías según sea necesario */}
        </ul>
      </div>
      

      <div className="ofertas-section">
        <h2>Ofertas</h2>
        <div className="oferta-item">
          <h3>Oferta 1</h3>
          <p>Descripción de la oferta 1</p>
        </div>
        <div className="oferta-item">
          <h3>Oferta 2</h3>
          <p>Descripción de la oferta 2</p>
        </div>
        {/* Agrega más ofertas según sea necesario */}
      </div>
    </div>
  );
};

export default Home;
