import React from "react";
import './noticia.css'
import Button from "../../button";



const Noticia = ( { title, image, content }) => {

  return (
    <div className="noticia">
      <div className="noticia-title">
        <h5>{title}</h5>
      </div>
      <div className="noticia-image">
          <img 
          src={ image && 'fagugaramisa/img/news/noticias.jpg'}
          alt={title} />
      </div>
      <div className="noticia-message">
        <p className="parrafo-noticias">{content}</p>
      </div>
      
      <button className="btn">Ver Noticia</button>
    </div>
  );
};
export default Noticia;
