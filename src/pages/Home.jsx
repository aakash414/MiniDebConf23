import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Timeline from '../components/Timeline'
// import Registration from '../components/Registration'
import Footer from '../components/Footer'
import Count from '../components/Count'
import Sponsor from '../components/Sponsor'
import SupabaseReg from '../components/SupabaseReg'
// import Timeline from '../components/Timeline'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Count/>
      <About />
      {/* <Registration /> */}
      {/* <SupabaseReg /> */}
      <Sponsor/>
      <Timeline />
      <Footer />
    </div>
  )
}

export default Home