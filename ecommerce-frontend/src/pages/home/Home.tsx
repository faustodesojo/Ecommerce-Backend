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
            <p>En nuestra empresa, fabricamos postes de hormigón de primera calidad para alambrado romboidal utilizando los mejores materiales y técnicas disponibles. Empleamos cemento Portland como aglutinante principal, garantizando cohesión y resistencia. Nuestros agregados, una mezcla de arena, grava y piedra triturada, proporcionan una estructura sólida y una resistencia mecánica superior. </p>
          </div>
          <div className="production-item">
            <li>Tejido Romboidal</li>
            <img src="images/tejido-produccion.jpg" alt="Tejido Romboidal" />
            <p>En nuestra empresa, producimos tejido romboidal de primera calidad utilizando materiales y procesos de vanguardia. Empleamos alambre de acero galvanizado de alta resistencia para garantizar durabilidad y protección contra la corrosión. Nuestro proceso de fabricación incluye el trenzado preciso de los alambres para formar una malla uniforme y resistente, con rombos perfectamente definidos. Utilizamos maquinaria de última generación que dobla las puntas del tejido, garantizando una mayor seguridad y evitando bordes afilados.</p>
          </div>
        </ul>
      </div>

    </div>
  );
};

export default Home;
