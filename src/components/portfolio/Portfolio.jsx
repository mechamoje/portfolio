import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Projeto Strata",
    github: "https://github.com/ferreirajn/ProjetoStrataHTMLCSS",
    demo: "https://projeto-strata-htmlcss.vercel.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Netflix clone",
    github: "https://github.com/ferreirajn/clone_netflix_DIO",
    demo: "https://clonenetflix-bay.vercel.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Names variation",
    github: "https://github.com/ferreirajn/names_variation",
    demo: "https://names-variation.vercel.app",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> Trabalhos recentes </h5>
      <h2> Portfolio </h2>

      <div className="containar portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
