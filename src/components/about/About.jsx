import React from "react";
import "./about.css";
import ME from "../../assets/me-about.svg";
import { GiBrain } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { MdFolderSpecial } from "react-icons/md";
import { useState } from 'react'

export const About = () => {
  const [switchLang, setSwitchLang] = useState('pt')

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

        <div className="about__content" id='pt-container' >
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

          <button className="about-btn btn-primary btn"  onClick={() => setSwitchLang(() => { 
            document.querySelector('#pt-container').classList.add('hide')
            document.querySelector('#pt-container').classList.remove('show')
            document.querySelector('#eng-container').classList.add('show')
            document.querySelector('#eng-container').classList.remove('hide')
          })}>
            Switch to english
          </button>

        </div>
        <div className="about__content hide" id='eng-container'>
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
            Fluent in English, currently graduating in Systems and 
            Analisys Development and focusing my studying in front-end 
            development. Working daily and building strong knowledge in 
            JavaScript, React.js, Next.js, Typescript, HTML5 and CSS3.
            Familiarity with Wordpress and PHP.
            Always in development and working hard to improve my skills.
          </p>

          <button className="about-btn btn-primary btn">
            <a href="#contact">
            Get in touch
          </a> 
          </button>

          <button className="about-btn btn-primary btn" onClick={() => setSwitchLang(() => { 
            document.querySelector('#eng-container').classList.add('hide')
            document.querySelector('#eng-container').classList.remove('show')
            document.querySelector('#pt-container').classList.add('show')
            document.querySelector('#pt-container').classList.remove('hide')
          })}>
            Switch to portuguese
          </button>

        </div>
      </div>
    </section>
  );
};
