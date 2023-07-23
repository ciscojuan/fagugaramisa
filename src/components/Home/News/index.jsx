import React from "react";
import Noticia from "./Noticia";
import Activity from '../Activities'
import "./noticias.css";
import data from "../../../utils/noticias.json";
import Button from "../button";
import { Link } from "react-router-dom";

const News = () => {
  const noticias = data.noticias.slice(0, 3);
  const actividades = data.actividades.slice(0, 3);
  return (
    <>
      <div className="container-news">
        <h1 className="news">NOTICIAS</h1>
        <p className="text-news">
          Aquí encontrarás todas las noticias y novedades de nuestro Fondo
          Familiar, nos interesa que estés informado.
        </p>
        <div className="noticias">
          {noticias.map((noticia, index) => (
            <Noticia
              key={index}
              title={noticia.title}
              fecha={noticia.fecha}
              image={noticia.image}
              content={noticia.content}
            />
          ))}
        </div>
        <Link to="/news" className="link">
          <Button value="Ver más Noticias" />
        </Link>
      </div>

      <div className="container-news">
        <h1 className="news">Actividades</h1>
        <p className="text-news">
          Aquí encontrarás todas las noticias y novedades de nuestro Fondo
          Familiar, nos interesa que estés informado.
        </p>
        <div className="noticias">
          {actividades.map((actividad, index) => (
            <Activity
              key={index}
              title={actividad.title}
              fecha={actividad.fecha}
              image={actividad.image}
              content={actividad.content}
            />
          ))}
        </div>
        <Link to="/activities" className="link">
          <Button value="Ver más Actividades" />
        </Link>
      </div>
    </>
  );
};
export default News;
