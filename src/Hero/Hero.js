import React from "react";
import "./Hero.css";
import Background from "../assets/background-video.mp4";
import Logo from "../assets/logo.png";
import { RxDoubleArrowDown } from "react-icons/rx";
import {FiBookOpen} from "react-icons/fi";

const Hero = () => {
  return (
    <section className="Hero">
      <div className="hero-background">
        <video autoPlay muted loop src={Background} id="myVideo" />
      </div>
      <div className="hero-content">
        <div className="logo">
          <img src={Logo} alt="Logo" /> 
        </div>
        <FiBookOpen className="book-icon" />
        <h1>Encontre inspiração e equilíbrio na coleção de livros terapêuticos de Glaucia Paiva, disponíveis abaixo!</h1>
        <a href="#product0">
          <RxDoubleArrowDown className="arrow" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
