import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import NextLogo from "../../assets/nextlogo.png";
import ReactLogo from "../../assets/react.png";
import jslogo from "../../assets/js.png";
import htmllogo from "../../assets/html.png";
import tslogo from "../../assets/ts.png";
import csslogo from "../../assets/css.svg";
import phplogo from "../../assets/phplogo.png";
import wplogo from "../../assets/wp.png";

function stars(number) {
  switch (number) {
    case 1:
      return "✪";
      break;
    case 2:
      return "✪✪";
      break;
    case 3:
      return "✪✪✪";
      break;
    case 4:
      return "✪✪✪✪";
      break;
    case 5:
      return "✪✪✪✪✪";
      break;
  }
}

const experience = [
  {
    icon: jslogo,
    language: "Javascript",
    level: stars(4),
  },
  {
    icon: ReactLogo,
    language: "React JS",
    level: stars(4),
  },
  {
    icon: csslogo,
    language: "CSS3",
    level: stars(4),
  },
  {
    icon: tslogo,
    language: "Typescript",
    level: stars(4),
  },
  {
    icon: NextLogo,
    language: "Next js",
    level: stars(4),
  },
  {
    icon: htmllogo,
    language: "HTML5",
    level: stars(5),
  },
  {
    icon: phplogo,
    language: "PHP",
    level: stars(3),
  },
  {
    icon: wplogo,
    language: "WordPress",
    level: stars(3),
  },
];

export const Experience = () => {
  return (
    <section id="experience">
      <article>
        <h5>Conhecimentos</h5>
        <h2>Minhas habilidades</h2>
      </article>

      <div className="container experience__container">
        <ul id="experience-list">
          {experience.map(({ id, language, level, icon }) => {
            return (
              <li className="experience-li">
                <img src={icon} className="li-icon" />
                <h4 className="icon-title"> {language} </h4>
                <small className="text-light"> {level} </small>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
