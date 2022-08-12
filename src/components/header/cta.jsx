import React from 'react'
import CV  from "../../assets/cv.pdf"

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Baixar CV </a>
        <a href="#contact" className='btn btn-primary'> Fale comigo </a>
    </div>
  )
}
