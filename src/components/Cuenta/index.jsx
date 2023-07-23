import React from "react";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import "./cuenta.css";

const Cuenta = ({ card }) => {
  return (
    <div className="container-account">
      <h1>Informacion de la cuenta</h1>
      <div className="cuenta">
        <div variant="outlined" className="card">
          <div className="card-body">
            <h5 className="card-title">Juan Pablo Ramirez</h5>
            <img src="/img/male.png" alt="socio" />
          <p>Socio</p>
          </div>
        </div>

        <div className="card">
            <h5 className="card-title">Informacion Personal</h5>
          <p> Direccion: Calle Falsa 123</p>
          <p>Ciudad de Mexico</p>
          <p>Telefono: +52 123456789</p>
          <p>Correo: juan.ramirez.1519@gmail.com</p>
          <p>Compleaños: Julio 18</p>
          <p>Miembro desde: 01/01/2021</p>
          <p>Saldo: $200 000</p>
        </div>
      </div>
    </div>
  );
};

export default Cuenta;
