import React, { useEffect, useState } from "react";
import Anchor from "./Link";
import "./nav.css";

const Nav = () => {
  //crea una funcion que cambie el background del nav cuando se haga scroll
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scroll ? "header onScroll" : "header"} data-scroll={scroll}>
      <div className="logo"></div>

      <nav className="nav">
        <ul className="nav__menu">
          <Anchor content="Home" href="/home" />
          <Anchor content="Cuenta" href="/account" />
          <Anchor content="Noticias" href="/news" />
          <Anchor content="Actividades" href="/activities" />
        </ul>
        <div className="nav__flags">
          <div className="nav__flags--item">
            <img
              src="assets/images/main/icon-es.png"
              alt="Espanish"
              data-language="es"
            />
          </div>
          <div className="nav__flags--item">
            <img
              src="assets/images/main/icon-en.png"
              alt="English"
              data-language="gb"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
