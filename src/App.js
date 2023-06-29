import React from "react";
import Nav from "./components/nav";
import Home from "./components/Home";
import Noticias from "./components/Noticias";
import Actividades from "./components/Actividades";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<Noticias />} />
        <Route path="/activities" element={<Actividades />} />
        <Route path='*' element={<Home/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
