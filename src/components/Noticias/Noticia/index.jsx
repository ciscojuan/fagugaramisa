import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Image from '../../../assets/img/news/noticias.jpg'
import './noticia.css'
import Button from "../../Home/button";

import axios from "axios";
const Noticia = () => {
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState([]);
  const { id } = useParams();
  console.log(id);
  const url = "http://localhost:38600/api/v1/posts/";

  useEffect(() => {
    axios.get(url + id).then((res) => {
      setNoticia(res.data);
    });
  }, [id]);
  return (
    <>
      <div className="banner-news">
        <h1 className="title-news">TITLE FAGUGARAMISA</h1>
      </div>
      <div className="container-noticia">
        <div className="title-noticia"> {noticia.title} - FAGUGARAMISA</div>
        <div className="noticia-content">
          <img src={noticia.image ? noticia.image : Image} className="img-fluid" alt={noticia.title} />
          <p className="noticia-text">{noticia.content}</p>
          <p className="noticia-text"><b>Fecha: </b>{noticia.createdAt}</p>
          <button className="btn" onClick={() => navigate(-1)}>Ver mas Noticias</button>
        </div>
      </div>
    </>
  );
};

export default Noticia;
