import React from "react";
import "./footer.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLocationOn, CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="images/logo.png" alt="Logo" />
      </div>
      <ul className="footer-container">
        <div className="redes">
            <h3>Redes</h3>
          <li>
            <FaWhatsapp /> +549 221123456
          </li>
          <li>
            <FaInstagram /> @alambardosbelgrano
          </li>
          <li>
            <FaFacebook /> @alambardosbelgrano
          </li>
        </div>
        <div className="contacto">
            <h3>Contacto</h3>
          <Link to="/contacto">Contáctanos</Link>
          <Link to= "/">Inicio</Link>
          <Link to= "/productos">Comprar Online</Link>

    </div>
        <div className="informacion">
            <h3>Informacion</h3>
           
            <Link to="https://www.google.com.ar/maps/place/Alambrados+Belgrano+SRL/@-34.8906367,-58.0185756,17z/data=!3m1!4b1!4m6!3m5!1s0x95a2ddc20d7b6a81:0xa28471d53fbc9a5a!8m2!3d-34.8906411!4d-58.0160007!16s%2Fg%2F11cp7f471q?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
            <p>< CiLocationOn /> Belgrano 2820, La Plata</p></Link>
            <Link to= "/login" ><p><VscAccount /> Iniciar Sesion</p></Link>
          <Link to= "/cart"><p>
            <CiShoppingCart /> Mi Carrito</p>
          </Link>
        </div>
      </ul>

      <p>&copy; 2023 Ecommerce. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
