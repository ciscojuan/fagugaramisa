import React from "react";
import Nav from "./components/nav";
import Home from "./components/Home";
import Noticias from "./components/Noticias";
import Noticia from "./components/Noticias/Noticia";
import Actividades from "./components/Actividades";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";
import Cuenta from "./components/Cuenta";
import CrearNoticia from "./components/Cuenta/CrearNoticia";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {

//configure CORS to make request to the railways api
// const cors = require('cors'); 
// app.use(cors());
// app.options('*', cors());

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<Noticias />} />
        <Route path="/news/:id" element={<Noticias />} />
        <Route path="/news/:id/" element={<Noticia />} />
        <Route path="/account" element={<Cuenta />} />
        <Route path='/create-news' element={<CrearNoticia />} />
        <Route path="/activities" element={<Actividades />} />
        <Route path="/gallery" element={<Galeria />} />"
        <Route path='*' element={<Home/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
