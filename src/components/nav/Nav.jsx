import React from 'react'
import "./nav.css"
import { VscHome } from 'react-icons/vsc'
import {FiUser} from 'react-icons/fi'
import {CgToolbox} from 'react-icons/cg'
import {GoBook} from "react-icons/go"
import {TbPhoneCall} from 'react-icons/tb'


export const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'> <VscHome /> </a>
      <a href="#about"> <FiUser /> </a>
      <a href="#experience"> <CgToolbox /> </a>
      <a href="#services"> <GoBook/> </a>
      <a href="#contact"> <TbPhoneCall /> </a>
    </nav>
  )
}
