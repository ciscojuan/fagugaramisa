import React, { useEffect, useState } from "react";
import axios from "axios";
import imageA from '../../assets/img/activities/activity.jpg'
import'./actividades.css'
import { Container, Typography } from "@mui/material";
const Actividades = () => {
  const url = "http://localhost:38600/api/v1/posts/";
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    axios.get(url + "/category/actividades").then((res) => setActividades(res.data));
  }, []);

  console.log({
    actividades: actividades
  });

  return (
    <>
      <div className="banner-activities">
        <div className="box">
          <h1 className="title-activities">ACTIVIDADES FAGUGARAMISA</h1>
        </div>
      </div>
      <Container maxWidth="xl">
        <Typography variant="h1" component="h2" mt={5} >
          ACTIVIDADES
        </Typography>
        <p className="parrafo-activities">
          Aquí encontrarás todas las actividades de nuestro Fondo familiar, nos interesa que estés informado.
        </p>

        <div className="noticias" spacing={5}>
          {actividades && actividades.map((actividad, index) => (
            <div className="noticia" key={index}>
            <div className="noticia-title">
              <h5>{actividad.title}</h5>
            </div>
            <div className="noticia-image">
                <img src={actividad.image ?actividad.image : imageA} alt={actividad.title} />
            </div>
            <div className="noticia-date">
                <span>{actividad.createdAt.slice(0,10)}</span>
            </div>
            <div className="noticia-message">
              <p className="parrafo-noticias">{actividad.content.slice(0,200)}</p>
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
