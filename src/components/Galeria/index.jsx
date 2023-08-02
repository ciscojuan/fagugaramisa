import React from "react";
import image from "../../assets/img/male.png";
import { Navigate } from "react-router-dom";
import "./galeria.css";
const Galeria = () => {
  return (
    <div className="container-gallery">
      <div className="banner-gallery">
        <h1 className="title-banner">
          Galeria de Imagenes Actividades y Eventos
        </h1>
      </div>
      <div className="gallery-content">
        <h2 className="title-gallery">ACTIVIDADES</h2>
        <div className="imagenes">
          <div className="imagen-content" onClick="" >
            <div className="img">
              <img src={image} alt="asfd" />
            </div>
            <h3 className="text-image">tile</h3>
          </div>

          <div className="imagen-content" onClick="">
            <div className="img">
              <img src={image} alt="asfd" />
            </div>
            <h3 className="text-image">tile</h3>
          </div>

          <div className="imagen-content" onClick="">
            <div className="img">
              <img src={image} alt="asfd" />
            </div>
            <h3 className="text-image">tile</h3>
          </div>

          <div className="imagen-content" onClick="">
            <div className="img">
              <img src={image} alt="asfd" />
            </div>
            <h3 className="text-image">tile</h3>
          </div>

          <div className="imagen-content" onClick="">
            <div className="img">
              <img src={image} alt="asfd" />
            </div>
            <h3 className="text-image">tile</h3>
          </div>

          <div className="imagen-content" onClick="">
            <div className="img">
              <img src={image} alt="asfd" />
            </div>
            <h3 className="text-image">tile</h3>
          </div>
        </div>

        <h2 className="title-gallery">SALIDAS</h2>
        <div className="imagenes">
          <div className="imagen-content" onClick="">
            <div className="img">
              <img src={image} alt="asfd" />
            </div>
            <h3 className="text-image">tile</h3>
          </div>

          <div className="imagen-content" onClick="">
            <div className="img">
              <img src={image} alt="asfd" />
            </div>
            <h3 className="text-image">tile</h3>
          </div>

          <div className="imagen-content" onClick="">
            <div className="img">
              <img src={image} alt="asfd" />
            </div>
            <h3 className="text-image">tile</h3>
          </div>

          <div className="imagen-content" onClick="">
            <div className="img">
              <img src={image} alt="asfd" />
            </div>
            <h3 className="text-image">tile</h3>
          </div>

          <div className="imagen-content" onClick="">
            <div className="img">
              <img src={image} alt="asfd" />
            </div>
            <h3 className="text-image">tile</h3>
          </div>

          <div className="imagen-content" onClick="">
            <div className="img">
              <img src={image} alt="asfd" />
            </div>
            <h3 className="text-image">tile</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
