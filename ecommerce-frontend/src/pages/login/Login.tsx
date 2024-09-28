import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthPage.css";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Por favor, complete todos los campos.");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setError("Ingrese un correo válido.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login exitoso:", formData);
    }
  };

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Correo:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
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
            className="form-input"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="auth-button">
          Iniciar Sesión
        </button>
      </form>
      <p className="auth-register">
        ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>{" "}
    </div>
  );
};

export default Login;
