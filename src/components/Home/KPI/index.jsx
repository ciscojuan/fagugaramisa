import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import WalletIcon from "@mui/icons-material/Wallet";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import "./kpi.css";

const KPI = () => {
  return (
    <div className="kpi">
      <div className="kpi-container">
        <PersonAddIcon sx={{ fontSize: 180 }} />
        <h2 className="kpi-title">Gestiona tu Cuenta</h2>
      </div>
      <div className="separator"></div>
      <div className="kpi-container">
        <WalletIcon sx={{ fontSize: 180 }} />
        <h2 className="kpi-title">Empieza a ahorrar</h2>
      </div>
      <div className="separator"></div>
      <div className="kpi-container">
        <LocalAirportIcon sx={{ fontSize: 180 }} />
        <h2 className="kpi-title">Planea tu destino</h2>
      </div>
    </div>
  );
};
export default KPI;
