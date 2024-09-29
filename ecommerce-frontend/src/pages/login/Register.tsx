import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AuthPage.css";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [inputErrors, setInputErrors] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [successMessage, setSuccessMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setInputErrors({ ...inputErrors, [name]: false });
  };

  const validateForm = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const errors = {
      name: !formData.name,
      email: !formData.email || !emailRegex.test(formData.email),
      password: !formData.password,
    };
    setInputErrors(errors);

    if (errors.name || errors.password || errors.email) {
      setError("Por favor, complete todos los campos correctamente.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulando una operación asíncrona
      setSuccessMessage("¡Registro exitoso!");
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Redirigir a la página principal después del éxito
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${inputErrors.name ? "input-error" : ""}`}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${inputErrors.email ? "input-error" : ""}`}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`form-input ${
              inputErrors.password ? "input-error" : ""
            }`}
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="auth-button">
          Registrarse
        </button>
      </form>
      <p className="auth-login">
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
      </p>
    </div>
  );
};

export default Register;
