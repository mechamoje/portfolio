import React from "react";
import PtCv from "../../assets/JessicaFerreira-PT.pdf";
import EnCv from "../../assets/JessicaFerreira-EN.pdf";
import { useState } from "react";

export const CTA = () => {
  const [showNav, setShowNav] = useState("hide");

  return (
    <nav className="cta">
      <a
        className="btn"
        onClick={() => {
          if (showNav === "show") {
            setShowNav("hide");
          } else if (showNav === "hide") {
            setShowNav("show");
          }
        }}
      >
        {" "}
        Curriculum{" "}
      </a>
      <a href="#contact" className="btn btn-primary">
        {" "}
        Contact{" "}
      </a>
      <article
        className={showNav === "hide" ? "hide" : ""}
        id="nav-list-container"
      >
        <h4> Download: </h4>
        <ul id="nav-list">
          <li>
            {" "}
            <a href={EnCv} download>
              {" "}
              in English
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href={PtCv} download>
              in Portuguese
            </a>{" "}
          </li>
        </ul>
      </article>
    </nav>
  );
};
