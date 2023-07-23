import React from "react";
import data from "../../utils/noticias.json";
import "../Home/News/Noticia/noticia.css";
import'./actividades.css'
import { Button, Container, Grid, Typography, Card, CardActions, CardContent, CardMedia } from "@mui/material";
const Activities = () => {
  const actividades = data.actividades;

  return (
    <>
      <div className="banner-news">
        <div className="box">
          <h1 className="title-news">ACTIVIDADES FAGUGARAMISA</h1>
        </div>
      </div>
      <Container maxWidth="xl">
        <Typography variant="h1" component="h2" mt={5}>
          Actividades
        </Typography>
        <p className="parrafo-noticias">
          Aquí encontrarás todas las noticias y novedades de nuestro Parque
          Residencial Sol Naciente, nos interesa que estés informado.
        </p>

        <div className="noticias" spacing={5}>
          {actividades.map((actividad, index) => (
            <div className="noticia" key={index}>
            <div className="noticia-title">
              <h5>{actividad.title}</h5>
            </div>
            <div className="noticia-image">
                <img src={actividad.image} alt={actividad.title} />
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

export default Activities;
