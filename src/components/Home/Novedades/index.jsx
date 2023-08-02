import React, {useEffect, useState} from "react";
import Noticias from "./News";
import Activity from "./Activities";
import ActivityImage from '../../../assets/img/activities/activity.jpg';
import NewsImage from '../../../assets/img/news/noticias.jpg'
import axios from 'axios';
import "./noticias.css";
import Button from "../button";
import { Link } from "react-router-dom";


const Novedades = () => {
  const url = 'http://localhost:38600/api/v1/posts/'
  const [noticias, setNoticias] = useState([]);
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    axios.get(url + "category/noticias")
      .then((res) => {
        setNoticias(res.data);     
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios.get(url + "category/actividades")
      .then((res) => {
        setActividades(res.data)
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
            <Noticias
              key={noticia.id}
              title={noticia.title}
              fecha={noticia.fecha}
              image={noticia.image ? noticia.image : NewsImage}
              content={noticia.content.slice(0, 200)+ ' ...'}
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
              image={actividad.image ? actividad.image : ActivityImage}
              content={actividad.content.slice(0, 200)+ ' ...'}
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
export default Novedades;
