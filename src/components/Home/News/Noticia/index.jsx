import React from "react";
import './noticia.css'
import Button from "../../button";



const Noticia = (props) => {
  const { title, image, message } = props;

  return (
    <div className="noticia">
      <div className="noticia-image">
          <img src={image} alt={title} />
      </div>
      <div className="noticia-title">
        <h5>{title}</h5>
      </div>
      <div className="noticia-message">
        <p>{message}</p>
      </div>
      
      <button className="btn">Ver Noticia</button>
    </div>
  );
};
export default Noticia;