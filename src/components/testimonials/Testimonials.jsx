import React from 'react'
import "./testimonials.css"
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'


const data = [
  {
    avatar: AVATAR1,
    name: 'Client 1',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nisi nostrum mollitia. Voluptates aut deserunt deleniti dolorum fugiat molestiae facere animi aliquam rem, obcaecati a, blanditiis consectetur officiis, rerum sint.' ,
  },

  {  avatar: AVATAR2,
    name: 'Client two',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nisi nostrum mollitia. Voluptates aut deserunt deleniti dolorum fugiat molestiae facere animi aliquam rem, obcaecati a, blanditiis consectetur officiis, rerum sint.' ,
  },

  {  avatar: AVATAR3,
    name: 'Client 3',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nisi nostrum mollitia. Voluptates aut deserunt deleniti dolorum fugiat molestiae facere animi aliquam rem, obcaecati a, blanditiis consectetur officiis, rerum sint.' ,
  },

  {  avatar: AVATAR4,
    name: 'Client 4',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nisi nostrum mollitia. Voluptates aut deserunt deleniti dolorum fugiat molestiae facere animi aliquam rem, obcaecati a, blanditiis consectetur officiis, rerum sint.' ,
  },
]

export const Testimonials = () => {
  return (
    <section id='testimonials' >
      <h5> Review from clients </h5>
      <h2> Testimonials </h2>

      <div className="container testimonials__container">
       {
        data.map(({avatar, name, review}, index)=> {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" /> 
              </div>
              <h5 className='client__name'>{name}</h5> 
              <small className='client__review'> {review} </small>
            </article>
          )
        })
       }
      </div>

    </section>
  )
}
