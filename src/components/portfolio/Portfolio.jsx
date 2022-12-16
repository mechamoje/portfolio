import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/IMG4.jpeg";
import IMGRD from "../../assets/IMGRD.png"
import IMGSNAKE from "../../assets/IMGSNAKE.png"

const data = [
  {
    id: 6,
    image: IMGSNAKE,
    title: "FunSnake game",
    github: "https://github.com/ferreirajn/funsnake-game",
    demo: "https://funsnake-game.vercel.app/",
  },
  {
    id: 5,
    image: IMGRD,
    title: "RD Station Clone",
    github: "https://github.com/ferreirajn/rd-project",
    demo: "https://rd-project.vercel.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "EMI project",
    github: "https://github.com/ferreirajn/sus-project",
    demo: "https://emi-project.vercel.app/",
  },
  {
    id: 3,
    image: IMG2,
    title: "Netflix clone",
    github: "https://github.com/ferreirajn/clone_netflix_DIO",
    demo: "https://clonenetflix-bay.vercel.app",
  },
  {
    id: 2,
    image: IMG3,
    title: "Names variation",
    github: "https://github.com/ferreirajn/names_variation",
    demo: "https://names-variation.vercel.app",
  },
  {
    id: 1,
    image: IMG1,
    title: "Projeto Strata",
    github: "https://github.com/ferreirajn/ProjetoStrataHTMLCSS",
    demo: "https://projeto-strata-htmlcss.vercel.app",
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <article>
      <h5> Trabalhos recentes </h5>
      <h2> Portfolio </h2>
      </article>

      <div className="containar portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} className='portifolio-img' />
              </div>
              <h3> {title} </h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank"rel="noopener noreferrer" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Demonstração
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
