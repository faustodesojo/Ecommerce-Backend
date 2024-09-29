import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AuthPage.css";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const [inputErrors, setInputErrors] = useState({
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
      email: !formData.email || !emailRegex.test(formData.email),
      password: !formData.password,
    };
    setInputErrors(errors);

    if (errors.email) {
      setError("Ingrese un correo válido.");
      return false;
    }

    if (errors.password) {
      setError("Por favor, complete todos los campos.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("¡Sesión iniciada correctamente!");
      await new Promise((resolve) => setTimeout(resolve, 2000));

      navigate("/");
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
          Iniciar Sesión
        </button>
      </form>
      <p className="auth-register">
        ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default Login;
