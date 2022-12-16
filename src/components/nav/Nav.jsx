import React from 'react'
import "./nav.css"
import { VscHome } from 'react-icons/vsc'
import {FiUser} from 'react-icons/fi'
import {CgToolbox} from 'react-icons/cg'
import {GoBook} from "react-icons/go"
import {TbPhoneCall} from 'react-icons/tb'
import { useState } from 'react'
import {BsMenuButtonWideFill} from 'react-icons/bs'

export const Nav = () => {

  const [activeNav, setActiveNav] = useState('')

  return (
    <nav>
      <a id='home' href="#"  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} > <VscHome className='homeicon' /> </a>
      <a id='user' href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > <FiUser className='abouticon' /> </a>
      <a id='job' href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <CgToolbox className='jobicon' /> </a>
      <a id='book' href="#portfolio"  onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <GoBook className='bookicon'/> </a>
      <a id='phone' href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <TbPhoneCall className='phoneicon' /> </a>
    </nav>
  )
}
