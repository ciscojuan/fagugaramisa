import React, { useState } from "react";
import { Link } from "react-router-dom";



const Anchor = ({ content, href }) => {
  //crea una funcion para que cuando se haga click en el link se active el link
  const [active, setActive] = useState(false);

  return (
    <li className="nav--link">
      <Link to={href} className="link" onClick={() => setActive(!active)}>
        {content}
      </Link>
    </li>
  );
};

export default Anchor;
