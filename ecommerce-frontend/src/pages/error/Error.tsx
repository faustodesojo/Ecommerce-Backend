import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">
        Oops, la página que estás buscando no existe.
      </p>
      <button className="go-back-button" onClick={handleGoBack}>
        Volver a la página principal
      </button>
    </div>
  );
};

export default ErrorPage;
