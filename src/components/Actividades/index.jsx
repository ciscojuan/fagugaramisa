import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Home/News/Noticia/noticia.css";
import'./actividades.css'
import { Container, Typography } from "@mui/material";
const Actividades = () => {
  const url = "http://localhost:3000/api/v1/";
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    axios.get(url + "activities/").then((res) => setActividades(res.data.activities));
  }, []);

  console.log({
    actividades: actividades
  });

  return (
    <>
      <div className="banner-news">
        <div className="box">
          <h1 className="title-news">Noticias FAGUGARAMISA</h1>
        </div>
      </div>
      <Container maxWidth="xl">
        <Typography variant="h1" component="h2" mt={5}>
          NOTICIAS
        </Typography>
        <p className="parrafo-noticias">
          Aquí encontrarás todas las noticias y novedades de nuestro Parque
          Residencial Sol Naciente, nos interesa que estés informado.
        </p>

        <div className="noticias" spacing={5}>
          {actividades && actividades.map((actividad, index) => (
            <div className="noticia" key={index}>
            <div className="noticia-title">
              <h5>{actividad.title}</h5>
            </div>
            <div className="noticia-image">
                <img src={actividad.image && 'fagugaramisa/img/activities/activity.jpg'} alt={actividad.title} />
            </div>
            <div className="noticia-date">
                <span>{actividad.fecha}</span>
            </div>
            <div className="noticia-message">
              <p className="parrafo-noticias">{actividad.content}</p>
            </div>
            
            <button className="btn">Ver Noticia</button>
          </div>
          ))}
        </div>

      </Container>
    </>
  );
};

export default Actividades;
