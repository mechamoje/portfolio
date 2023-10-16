import React, { FC, useEffect, useState } from "react";
import "./portfolio.css";

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  async function getProjects() {
    try {
      const response = await fetch("http://127.0.0.1:3003/projects/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const ProjectsData = await response.json();
      return ProjectsData;
    } catch (error) {
      console.error("Error fetching Projects:", error);
      return [];
    }
  }

  useEffect(() => {
    getProjects().then((projectsData) => {
      setProjects(projectsData);
    });
  }, []);

  return (
    <section id="portfolio">
      <article>
        <h5> Trabalhos recentes </h5>
        <h2> Portfolio </h2>
      </article>

      <div className="containar portfolio__container">
        {projects.reverse().map(({ id, cover, title, github, demo, type }) => {
          const imageUrl = `${process.env.REACT_APP_MEDIA_URL}${cover}`;
          if (type === "game") {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={imageUrl} alt={title} className="portifolio-img" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Jogar
                  </a>
                </div>
              </article>
            );
          } else {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={imageUrl} alt={title} className="portifolio-img" />
                </div>
                <h3> {title} </h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Demonstração
                  </a>
                </div>
              </article>
            );
          }
        })}
      </div>
    </section>
  );
};
