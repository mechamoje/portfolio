import React from "react";
import "./about.css";
import ME from "../../assets/me-about.svg";
import { GiBrain } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { MdFolderSpecial } from "react-icons/md";

export const About = () => {
  return (
    <section id="about">
      <article> 
        <h5> Saiba mais </h5>
        <h2> Sobre mim </h2> 
      </article>
    
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="uma foto minha sorrindo, com camisa laranja" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiBrain className="about__icon" />
              <h5> Conhecimentos </h5>
              <small> Análise e Desenvolvimento de sistemas </small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5> Projetos </h5>
              <small> 15+ projetos realizados </small>
            </article>

            <article className="about__card">
              <MdFolderSpecial className="about__icon" />
              <h5> Experiencia </h5>
              <small> 6+ meses de experiência </small>
            </article>
          </div>

          <p>
            Fluente em inglês, atualmente me graduando em Análise e
            Desenvolvimento de Sistemas e especializando meus estudos em
            desenvolvimento front-end. Trabalhando diariamente e construindo
            conhecimentos em React, Typescript, NextJS, HTML5 e CSS3.
            Familiaridade com WordPress, JavaScript e PHP.
          </p>

          <button className="about-btn btn-primary btn">
            <a href="#contact">
            Fale comigo
          </a> 
          </button>

        </div>
      </div>
    </section>
  );
};
