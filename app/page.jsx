import About from '@/components/home/About'
import Footer from '@/components/home/Footer'
import Hero from '@/components/home/Hero'
import OurService from '@/components/home/OurService'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <OurService />
      <Footer />
    </div>
  )
}

export default Home
