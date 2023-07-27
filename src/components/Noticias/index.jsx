import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Noticia from "./Noticia";
import axios from "axios";
import "../Home/Novedades/News/noticia.css";
import'./noticias.css'
const Noticias = () => {
  const navigate = useNavigate();
  const url = "https://fagugaramisa-api.onrender.com/api/v1/";
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    axios.get(url + "news/").then((res) => setNoticias(res.data.news));
  }, []);

  console.log({
    noticias: noticias
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
          {noticias && noticias.map((noticia, index) => (
            <div className="noticia" key={index}>
            <div className="noticia-title">
              <h5>{noticia.title}</h5>
            </div>
            <div className="noticia-image">
                <img src={noticia.image && 'fagugaramisa/img/news/noticias.jpg'} alt={noticia.title} />
            </div>
            <div className="noticia-date">
                <span>{noticia.fecha}</span>
            </div>
            <div className="noticia-message">
              <p className="parrafo-noticias">{noticia.content}</p>
            </div>
            
            <button className="btn" onClick={() =>navigate(`/news/${noticia.id}`)}>Ver Noticia</button>
          </div>
          ))}
        </div>

      </Container>
    </>
  );
};

export default Noticias;
