import React from 'react'
import "./nav.css"
import { VscHome } from 'react-icons/vsc'
import {FiUser} from 'react-icons/fi'
import {CgToolbox} from 'react-icons/cg'
import {GoBook} from "react-icons/go"
import {TbPhoneCall} from 'react-icons/tb'
import { useState } from 'react'
// import {FiTool} from 'react-icons/fi'
// import {MdOutlineReviews} from 'react-icons/md'


export const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#"  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} > <VscHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > <FiUser /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <CgToolbox /> </a>
      {/* <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <FiTool/> </a> */}
      <a href="#portfolio"  onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <GoBook/> </a>
      {/* <a href="#testimonials"  onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}> <MdOutlineReviews/> </a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <TbPhoneCall /> </a>
    </nav>
  )
}
