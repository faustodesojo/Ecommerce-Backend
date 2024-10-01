import React, { useState } from "react";
import "./Contacto.css";

interface FormData {
  name: string;
  email: string;
  message: string;
  cellphone?: string;
}

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    cellphone: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.cellphone
    ) {
      setError("Por favor, complete todos los campos.");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setError("Ingrese un correo válido.");
      return false;
    }

    const phoneRegex = /^\d{7,15}$/;
    if (!phoneRegex.test(formData.cellphone || "")) {
      setError(
        "Ingrese un número de celular válido (solo números, entre 7 y 15 dígitos)."
      );
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Formulario enviado:", formData);
      alert("Formulario enviado con éxito");
      setFormData({ name: "", email: "", message: "", cellphone: "" });
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contacto</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group1">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input1"
          />
        </div>

        <div className="form-group1">
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input1"
          />
        </div>

        <div className="form-group1">
          <label htmlFor="cellphone">Celular:</label>
          <input
            type="number"
            id="cellphone"
            name="cellphone"
            value={formData.cellphone}
            onChange={handleChange}
            className="form-input1"
          />
        </div>

        <div className="form-group1">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
