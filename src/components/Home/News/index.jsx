import React from "react";
import Noticia from "./Noticia";
import Button from "../button";
import "./noticias.css";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="container-news">
      <h1 className="news">NOTICIAS</h1>
      <p>
        Aquí encontrarás todas las noticias y novedades de nuestro Parque
        Residencial Sol Naciente, nos interesa que estés informado.
      </p>
      <div className="noticias">
        <Noticia
          title="Creación de Pagina WEB"
          fecha="17/06/2023"
          image="/img/news/pagina-web.jpg"
          message="Creación de la pagina Web del fondo para propositos de comunicación entre los miembros del fondo"
        />
        <Noticia
          title="Asamblea Extraordianaria"
          fecha="20/06/2023"
          image="/img/news/pagina-web.jpg"
          message="Creación de la pagina Web del fondo para propositos de comunicación entre los miembros del fondo"
        />
        <Noticia
          title="Celebracion Halloween"
          fecha="31/10/2023"
          image="/img/news/pagina-web.jpg"
          message="Creación de la pagina Web del fondo para propositos de comunicación entre los miembros del fondo"
        />
      </div>
      <Link to="/news" className="link">
        <Button value="Ver más Noticias" />
      </Link>
    </div>
  );
};
export default News;
