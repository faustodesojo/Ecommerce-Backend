import React from "react";
import "./footer.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <Link to= "/cart">Mi pedido</Link>

    </div>
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
      </ul>

      <p>&copy; 2023 Ecommerce. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
