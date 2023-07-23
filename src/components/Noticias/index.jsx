import React from "react";
import data from "../../utils/noticias.json";
import "../Home/News/Noticia/noticia.css";
import'./noticias.css'
import { Button, Container, Grid, Typography, Card, CardActions, CardContent, CardMedia } from "@mui/material";
const Noticias = () => {
  const noticias = data.noticias;

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
          {noticias.map((noticia, index) => (
            <div className="noticia" key={index}>
            <div className="noticia-title">
              <h5>{noticia.title}</h5>
            </div>
            <div className="noticia-image">
                <img src={noticia.image} alt={noticia.title} />
            </div>
            <div className="noticia-message">
              <p className="parrafo-noticias">{noticia.content}</p>
            </div>
            
            <button className="btn">Ver Noticia</button>
          </div>
          ))}
        </div>

      </Container>
    </>
  );
};

export default Noticias;
