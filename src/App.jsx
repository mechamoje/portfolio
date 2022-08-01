import React from 'react'
import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import About from "./components/about/about.jsx"
import Experience from "./components/experience/experience"
import Service from "./components/services/service"
import Portfolio from "./components/portfolio/portfolio"
import Testimonials from "./components/testimonials/testimonials"
import Contact from "./components/contact/contact"

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}