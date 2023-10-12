// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default 


import Kutti from '../assets/Images/Logo.png'
import People from '../assets/Images/SAIT.jpeg'
import React, { useRef, useEffect } from 'react';
// import '../../Components/style.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Student from '../assets/Images/Student.png'


const AnimatedText = () => {
  useEffect(() => {
    setTimeout(() => {
      const replacers = document.querySelectorAll('[data-replace]');
      for (let i = 0; i < replacers.length; i++) {
        const replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(key => {
          replacers[i].classList.remove(key);
          replacers[i].classList.add(replaceClasses[key]);
        });
      }
    }, 1);
  }, []);

  return (
    <>
      <h1 className="font-black text-6xl text-black block duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      MiniDebConf23
      </h1>
      <p className="text-red-800 mt-4 text-lg block duration-700 delay-150 relative  transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      MiniDevConf23 is a dynamic open-source conference taking place at Cochin University of Science and Technology (CUSAT) in Cochin. This event is dedicated to fostering the open-source community and features engaging talks on Debian OS and related topics. Join us for an enlightening experience in the world of open source!
      </p>
    </>

 
  );
};

const AnimatedText2 = () => {
  useEffect(() => {
    setTimeout(() => {
      const replacers = document.querySelectorAll('[data-replace]');
      for (let i = 0; i < replacers.length; i++) {
        const replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(key => {
          replacers[i].classList.remove(key);
          replacers[i].classList.add(replaceClasses[key]);
        });
      }
    }, 1);
  }, []);

  return (
    <>
      <h1 className="font-black font-serif  text-6xl text-black block duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      Debian
      </h1>
      <p className="text-red-800  mt-4 font- text-lg block duration-700 delay-150 relative  transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      The Debian community is a global network of passionate individuals dedicated to the development and maintenance of the Debian operating system. It's a diverse and inclusive group of volunteers, including developers, testers, documenters, and users, who collaborate to ensure Debian remains a reliable, free, and open-source platform. The community's collective efforts exemplify the principles of transparency, democracy, and cooperation, making Debian a shining example of the power of open-source collaboration.
      </p>
    </>

 
  );
};
const AnimatedText3 = () => {
  useEffect(() => {
    setTimeout(() => {
      const replacers = document.querySelectorAll('[data-replace]');
      for (let i = 0; i < replacers.length; i++) {
        const replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(key => {
          replacers[i].classList.remove(key);
          replacers[i].classList.add(replaceClasses[key]);
        });
      }
    }, 1);
  }, []);

  return (
    <>
      <h1 className="font-black font-serif text-6xl text-white block duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      SAIT
      </h1>
      <p className="text-white mt-6 text-lg block duration-700 delay-150 relative  transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      SAIT, the Student Association of Information Technology, is an enthusiastic collective of IT students hailing from Cochin University of Science and Technology, School of Engineering, pursuing their B.Tech degrees. Bound by their shared passion for all things related to information technology and software, this vibrant group of students forms a dynamic community eager to explore and excel in the ever-evolving world of IT.
      </p>
    </>

 
  );
};


function Hero() {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="aos-container" id="about">
      <section
        className="relative bg-cover bg-white bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${Student})` }}
      >
        <div className='grid grid-cols-2 '>
           <div>

        <img src={Kutti} data-aos="fade-right" alt="Description of the image" style={{ width: '75%', height: '75%' }}  className='mt-55 ml-85' />

        </div>
        <div data-aos="fade-up"  className="relative mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">




        <div className="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 px-10 max-w-2xl rounded-3xl mx-auto py-20 flex flex-col items-start justify-center">
      <div className="duration-1000 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <AnimatedText />
      </div>
      
      <div className="mt-10 sm:flex sm:justify-center lg:justify-start duration-700 delay-300 relative transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
       
      </div>
    </div>
  



        </div>
       
        </div>
       

      </section>
      <section
        className="relative bg-cover bg-black bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${Student})` }}
      >
        <div className='grid grid-cols-2 '>
        <div data-aos="fade-up"  className="relative mx-auto max-w-screen-xl mt-12 px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">




        <div className="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 px-10 max-w-2xl rounded-3xl mx-auto py-20 flex flex-col items-start justify-center">
      <div className="duration-1000 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <AnimatedText3 />
      </div>
      
      <div className="mt-10 sm:flex sm:justify-center lg:justify-start duration-700 delay-300 relative transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
       
      </div>
    </div>
  



        </div>
        <div className=''>

        <img src={People} data-aos="fade-left" alt="Description of the image" style={{ width: '50%', height: '50' }} className='mt-40 ml-40' />

        </div>
        </div>
       

      </section>
      <section
        className="relative bg-cover bg-white bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${Student})` }}
      >
        <div className='grid grid-cols-2 '>
           
        <div>

        <img src={Student} data-aos="fade-right"  alt="Description of the image"  className='w-38 py-20 px-40 mt-20  ml-8 ' />

        </div>
        <div data-aos="fade-up"  className="relative mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">




        <div className="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 px-10 max-w-2xl rounded-3xl mx-auto py-20 flex flex-col items-start justify-center">
      <div className="duration-1000 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <AnimatedText2 />
      </div>
      
      <div className="mt-10 sm:flex sm:justify-center lg:justify-start duration-700 delay-300 relative transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
       
      </div>
    </div>
  



       
        </div>
       
      </div>
      </section>
      
    </div>
  );
}

export default Hero;



