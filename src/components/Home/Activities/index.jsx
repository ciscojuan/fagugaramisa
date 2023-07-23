import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./actividades.css";

const Activities = ({ title, image, fecha, content }) => {
  return (
    <div className="noticia">
      <div className="noticia-title">
        <h5>{title}</h5>
      </div>
      <div className="noticia-image">
          <img src={image} alt={title} />
      </div>
      <div className="noticia-message">
        <p className="parrafo-noticias">{content}</p>
        <span>{fecha}</span>
      </div>
      
      <button className="btn">Ver Actividad</button>
    </div>
  );
};
export default Activities;
