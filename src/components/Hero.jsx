import React from 'react'
import logo2 from '../assets/logo2.png'
import {motion} from 'framer-motion'
import MouseIcon from '@mui/icons-material/Mouse';
const Hero = () => {
  return (
    <div className='h-screen bgpattern'>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col'>
        <div className='mt-[15vh] grid grid-cols-1 md:grid-cols-2'>
          <motion.div
          initial={{ x: "-50%" }} // Starting position
          animate={{ x: "0" }} // Ending position
          transition={{ duration: 1, type: "tween" }}
          >
            <img src={logo2} className='m-auto w-[600px]' alt='logo2' />
          </motion.div>
          <div className='md:mt-40 mt-20'>
            <h1 className='text-[#a80030] md:text-left text-center text-5xl md:text-8xl font-[900] ubuntu'>MiniDebConf</h1>
            <div className='flex justify-center md:justify-start'>
              <h1 className='text-[#a80030] text-3xl md:text-6xl mr-10 md:mr-40 font-[900] ubuntu'>Kochi'23</h1>
              <h1 className='text-[#a80030] text-3xl md:text-6xl ubuntu'>CUSAT</h1>
            </div>
            <motion.div 
            whileHover={{ scale: 1.05 }}
            className='my-10 flex md:justify-start justify-center'> 
            <a
            href="#register"
            >
              <button className='bg-[#a80030] px-10 py-3 text-white ubuntu font-[800]'>Register</button>
            </a>
            </motion.div>
          </div>
        </div>
        <a
        href='#about' 
        className='m-auto mt-20 md:mt-0 slightUpAndDown'>
          <MouseIcon className="text-[#a80030] !text-3xl" />
        </a>
      </motion.div>
    </div>
  )
}

export default Hero