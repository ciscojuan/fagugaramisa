import React, { useState, useEffect } from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import Anchor from "./Link";
import "./nav.css";

const Nav = () => {
  const [user, setUser] = useState(
   false
  );
    console.log(user);  
  useEffect(() => {
    // This effect will run on component mount
    const storedUser = window.localStorage.getItem("user");
    setUser(storedUser !== null);
  }, []);

  const handleLogout = () => {
    try {
      setUser("");
      localStorage.removeItem("user");
    } catch (err) {
      console.lof(err);
    }
  };

  return (
    <header className="header">
      <div className="logo"></div>

      <nav className="nav">
        <ul className="nav__menu">
          <Anchor content="Home" href="/home" />
          <Anchor content="Galeria" href="/gallery" />
          <Anchor content="Noticias" href="/news" />
          <Anchor content="Actividades" href="/activities" />
        </ul>
        <div className="nav__flags">
          {user === false ? (
            <div className="nav__flags--item">
              <Link to="/login">
                <LoginOutlinedIcon
                  color="primary"
                  fontSize="large"
                  className="log"
                ></LoginOutlinedIcon>
              </Link>
            </div>
          ) : (
            <div className="nav__flags--item">
              <LogoutOutlinedIcon
                color="primary"
                fontSize="large"
                className="log"
                onClick={handleLogout}
              ></LogoutOutlinedIcon>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
