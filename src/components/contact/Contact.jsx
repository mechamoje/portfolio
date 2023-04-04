import React from "react";
import "./contact.css";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4t6bv2j",
        "template_wozjm8m",
        form.current,
        "RCq0RHnaSdjRp5ISW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <article>
        <h5> Entre em contato </h5>
        <h2> Fale comigo </h2>  
      </article>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailUnread className="contact__option-icon" />
            <h4>Email</h4>
            <h5> devjessica.f@gmail.com </h5>
            <a href="mailto:devjessica.f@gmail.com" target="_blank" rel="noopener noreferrer">
              {" "}
              Envie sua mensagem{" "}
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4> WhatsApp </h4>
            <h5> (81)99206-5674 </h5>
            <a
              href="https://api.whatsapp.com/send?phone=5581992065674"
              target="_blank"
              rel="noopener noreferrer"
            >
              Envie sua mensagem
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nome completo" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Sua mensagem"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {" "}
            Enviar mensagem{" "}
          </button>
        </form>
      </div>
    </section>
  );
};
