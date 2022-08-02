import React from 'react'
import "./header.css"
import {CTA} from './cta'
import ME from "../../assets/me.png"
import { Headersocials } from './headersocials'

export const Header = () => {
  return (
    <header> 
      <div className="container header__container">
        <h5> Hello, I'm </h5>
        <h1> Jéssica Ferreira </h1>
        <h5 className="text-light"> Front-end Developer </h5>
        <CTA />
        <Headersocials /> 


        <div className="me"> 
          <img src={ME} alt="" />
        </div>

         
        <a href="#contact" className='scroll__down'> Scroll Down </a>

      </div>
    </header>
  )
}
