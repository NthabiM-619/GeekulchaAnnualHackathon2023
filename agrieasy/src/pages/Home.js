import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Services from './Services'
import Faqs from './Faqs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <section className="">
      <Hero />
      <About />
      <Services />
      <Faqs />
    </section>
  )
}

export default Home