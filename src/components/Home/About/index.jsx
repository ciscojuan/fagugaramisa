import React from "react";
import {accordionData} from '../../../utils/accordion';
import Accordion from "./Accordion";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <h2>Preguntas Frecuentes</h2>
      {accordionData.map(({ title, content, index }) => (
        <Accordion key={index} title={title} content={content} />
      ))}
    </div>
  );
};

export default About;
