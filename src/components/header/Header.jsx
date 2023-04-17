import React from "react";
import "./header.css";
import { CTA } from "./cta";
import ME from "../../assets/me.svg";
import { Headersocials } from "./headersocials";

export const Header = () => {
  return (
    <header>
      <section className="container header__container">
        <article>
          <h5> Olá, eu sou </h5>
          <h1> Jéssica Ferreira </h1>
          <h5 className="text-light"> FullStack Developer </h5>
        </article>
        <CTA />
        <Headersocials />
        <picture class="me_img">
          <img src={ME} alt="" />
        </picture>
        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down{" "}
        </a>
      </section>
    </header>
  );
};
