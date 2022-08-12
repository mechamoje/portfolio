import React from 'react'
import "./footer.css"
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

export const Footer = () => {
  return (
    <footer>

      <a href="#" className='footer__logo'> JÉSSICAF. </a>

      <ul className='permalinks' >
        <li> <a href="#"> Home </a> </li>
        <li> <a href="#about"> About </a> </li>
        <li> <a href="#experience"> Experience </a> </li>
        <li> <a href="#services"> Services </a> </li>
        <li> <a href="#portfolio"> Portfolio </a> </li>
        <li> <a href="#testmonials"> Testmonials </a> </li>
        <li> <a href="#contact"> Contact </a> </li>
      </ul>

      <div className="footer__social">
        <a href="https://www.linkedin.com/in/j%C3%A9ssica-ferreira-soueu/"> <BsLinkedin/> </a>
        <a href="https://www.instagram.com/_jsolari/"> <BsInstagram/> </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; JÉSSICA FERREIRA </small>
      </div>

    </footer>
  )
}
