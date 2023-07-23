import React, {useEffect, useState} from "react";
import Noticia from "./Noticia";
import Activity from "../Activities";
import "./noticias.css";
import Button from "../button";
import { Link } from "react-router-dom";

const News = () => {
  const url = 'https://fagugaramisa-api.up.railway.app/'
  const [noticias, setNoticias] = useState([]);
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    const getNoticias = async () => {
      const res = await fetch(url+'noticias');
      const data = await res.json();
      setNoticias(data);
    };
    getNoticias();
  }, []);

  useEffect(() => {
    const getActividades = async () => {
      const res = await fetch(
        url + "actividades"
      );
      const data = await res.json();
      setActividades(data);
    };
    getActividades();
  }, []);

  console.log(noticias);
  console.log(actividades);

  return (
    <>
      <div className="container-news">
        <h1 className="news">NOTICIAS</h1>
        <p className="text-news">
          Aquí encontrarás todas las noticias y novedades de nuestro Fondo
          Familiar, nos interesa que estés informado.
        </p>
        <div className="noticias">
          {noticias.slice(0,3).map((noticia, index) => (
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
          {actividades.slice(0,3).map((actividad, index) => (
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
