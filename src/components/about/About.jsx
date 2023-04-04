import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { GiBrain } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { MdFolderSpecial } from "react-icons/md";

export const About = () => {
  return (
    <section id="about">
      <h5> Saiba mais </h5>
      <h2> Sobre mim </h2>

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
              <small> 20 + projetos realizados </small>
            </article>

            <article className="about__card">
              <MdFolderSpecial className="about__icon" />
              <h5> Experiencia </h5>
              <small> 1+ ano de experiência </small>
            </article>
          </div>

          <p>
            Fluente em inglês, atualmente me graduando em Análise e
            Desenvolvimento de Sistemas e especializando meus estudos em
            Desenvolvimento Web Fullstack. Trabalhando diariamente com React.js,
            Typescript, Next.js, PHP e WordPress. Desenvolvendo jogos através do
            Construct 3 nas horas vagas.
          </p>

          <a href="#contact" className="btn btn-primary">
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};
