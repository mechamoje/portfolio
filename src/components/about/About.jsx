import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.svg'
import {GiBrain} from 'react-icons/gi'
import {FaUsers} from 'react-icons/fa'
import {MdFolderSpecial} from 'react-icons/md'

export const About = () => {
  return (
    <section id="about">
      <h5> Get to know </h5>
      <h2> About me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="a picture of me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <GiBrain className='about__icon' />
              <h5> Experience </h5>
              <small> 1+ year working experience</small>
            </article>

            <article className="about__card">
              <FaUsers className='about__icon' />
              <h5> Clients </h5>
              <small> 200 + clients </small>
            </article>

            <article className="about__card">
              <MdFolderSpecial className='about__icon' />
              <h5> Experience </h5>
              <small> 1+ year working experience</small>
            </article>

            </div>
            
            <p> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere blanditiis aliquid voluptates ad, optio quia nam dolores inventore ipsum delectus similique veritatis veniam fugiat architecto alias. Molestiae, illo enim.
            </p>

            <a href="#contact" className='btn btn-primary'> Let's talk</a>

        
        </div>
      </div>

    </section>
  )
}
