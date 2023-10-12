import React from 'react'
import logo2 from '../assets/logo2.png'
const Hero = () => {
  return (
    <div className='h-screen bgpattern'>
      <div className='flex flex-col'>
        <img src={logo2} className='m-auto' alt='logo2' />
        <h1 className='text-[#a80030] m-auto text-7xl font-[900] ubuntu'>MiniDebConf</h1>
        <div className='m-auto flex'>
          <h1 className='text-[#a80030] m-auto text-5xl mr-24 font-[900] ubuntu'>Kochi'23</h1>
          <h1 className='text-[#a80030] m-auto text-5xl ubuntu'>CUSAT</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero