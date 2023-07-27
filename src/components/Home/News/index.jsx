import React, {useEffect, useState} from "react";
import Noticia from "./Noticia";
import Activity from "../Activities";
import axios from 'axios';
import "./noticias.css";
import Button from "../button";
import { Link } from "react-router-dom";


const News = () => {
  const url = 'https://fagugaramisa-api.onrender.com/api/v1/'
  //const url = 'http://localhost:3000/api/v1/'
  const [noticias, setNoticias] = useState([]);
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    axios.get(url + "/news/")
      .then((res) => {
        console.log(res.data.news);
        setNoticias(res.data.news);     
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios.get(url + "activities/")
      .then((res) => {
        console.log(res.data.activities);
        setActividades(res.data.activities)
      })
      .catch((err) => console.log(err));
  }, []);
    
  return (
    <>
      <div className="container-news">
        <h1 className="news">NOTICIAS</h1>
        <p className="text-news">
          Aquí encontrarás todas las noticias y novedades de nuestro Fondo
          Familiar, nos interesa que estés informado.
        </p>
        <div className="noticias">
          {noticias && noticias.slice(0, 3).map((noticia) => (
            <Noticia
              key={noticia.id}
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
          {actividades && actividades.slice(0,3).map((actividad, index) => (
            <Activity
              key={index}
              title={actividad.title}
              fecha={actividad.fecha}
              image={actividad.image && 'fagugaramisa/img/activities/activity.jpg'}
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
