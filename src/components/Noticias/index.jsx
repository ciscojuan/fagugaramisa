import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from '../../assets/img/news/noticias.jpg'
import axios from "axios";
import "../Home/Novedades/News/noticia.css";
import'./noticias.css'
const Noticias = () => {
  const navigate = useNavigate();
  const url = "http://localhost:38600/api/v1/posts/";
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    axios.get(url + "category/noticias").then((res) => setNoticias(res.data));
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
        <Typography variant="h1" component="h2" mt={5} >
          ACTIVIDADES
        </Typography>
        <p className="parrafo-activities">
          Aquí encontrarás todas las noticias de nuestro Fondo familiar, para que siempre estés bien informado de lo que ocurre en FAGUGARAMISA.
        </p>

        <div className="noticias" spacing={5}>
          {noticias && noticias.map((noticia, index) => (
            <div className="noticia" key={index}>
            <div className="noticia-title">
              <h5>{noticia.title}</h5>
            </div>
            <div className="noticia-image">
                <img src={noticia.image ? noticia.image : Image} alt={noticia.title} />
            </div>
            <div className="noticia-date">
                <span>{noticia.createdAt.slice(0,10)}</span>
            </div>
            <div className="noticia-message">
              <p className="parrafo-noticias">{noticia.content.slice(0,100)}</p>
            </div>
            
            <button className="btn" onClick={() =>navigate(`/news/${noticia._id}`)}>Ver Noticia</button>
          </div>
          ))}
        </div>

      </Container>
    </>
  );
};

export default Noticias;
