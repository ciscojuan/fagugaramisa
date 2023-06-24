import React, { useState } from 'react';
import './accordion.css';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="article">
      <div className="title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {
        isActive && <p className="content">{content}</p>
      }
    </div>
  );
};

export default Accordion;