import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { GiBrain } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { MdFolderSpecial } from "react-icons/md";
import { useState } from "react";

export const About = () => {
  const [switchLang, setSwitchLang] = useState("pt");

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

        <div className="about__content" id="pt-container">
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

          <button className="about-btn btn-primary btn">
            <a href="#contact">Entre em contato</a>
          </button>

          <button
            className="about-btn btn-primary btn"
            onClick={() =>
              setSwitchLang(() => {
                document.querySelector("#pt-container").classList.add("hide");
                document
                  .querySelector("#pt-container")
                  .classList.remove("show");
                document.querySelector("#eng-container").classList.add("show");
                document
                  .querySelector("#eng-container")
                  .classList.remove("hide");
              })
            }
          >
            Switch to english
          </button>
        </div>
        <div className="about__content hide" id="eng-container">
          <div className="about__cards">
            <article className="about__card">
              <GiBrain className="about__icon" />
              <h5> Knowledge </h5>
              <small> Systems and Analisys Development </small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5> Project </h5>
              <small> 15+ projects </small>
            </article>

            <article className="about__card">
              <MdFolderSpecial className="about__icon" />
              <h5> Experience </h5>
              <small> 8+ months of experience </small>
            </article>
          </div>

          <p>
            I'm fluent in English, persuing a degree in Systems and Analysis
            Development (which will be over around 2024-03) and focusing my
            studies on web development. I've worked daily and built strong
            knowledge in JavaScript, React.js, Next.js, Typescript, HTML5, CSS3,
            WordPress, PHP and more. I'm always in development and working hard
            to improve my skills. Being my best is my goal.
          </p>

          <button className="about-btn btn-primary btn">
            <a href="#contact">Get in touch</a>
          </button>

          <button
            className="about-btn btn-primary btn"
            onClick={() =>
              setSwitchLang(() => {
                document.querySelector("#eng-container").classList.add("hide");
                document
                  .querySelector("#eng-container")
                  .classList.remove("show");
                document.querySelector("#pt-container").classList.add("show");
                document
                  .querySelector("#pt-container")
                  .classList.remove("hide");
              })
            }
          >
            Switch to portuguese
          </button>
        </div>
      </div>
    </section>
  );
};
