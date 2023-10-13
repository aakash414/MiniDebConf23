import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Timeline from '../components/Timeline'
// import Registration from '../components/Registration'
import Footer from '../components/Footer'
import Count from '../components/Count'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Count/>
      <About />
      {/* <Timeline /> */}
      {/* <Registration /> */}
      <Footer />
    </div>
  )
}

export default Home