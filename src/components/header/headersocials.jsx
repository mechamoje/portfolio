import React from 'react'
import {TbBrandLinkedin} from 'react-icons/tb'
import {VscGithub} from 'react-icons/vsc'

export const Headersocials = () => {
  return (
    <div className='header__socials'>
       <a href="https://linkedin.com" target="_blank"> <TbBrandLinkedin/ ></a>
       <a href="https://github.com" target="_blank"> <VscGithub /> </a>
    </div>
  )
}
