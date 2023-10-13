import React from 'react';
// import { Typography } from '@mui/ma/
import { FaFacebook, FaLinkedin, FaInstagram,FaWhatsapp,FaEnvelope} from 'react-icons/fa';


const Footer = () => {
  return (
    <div id='footer'>
     <footer className="footer footer-center p-10 text-white   bold rounded bg-base-100  ">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover hover:text-rose-900">About us</a> 
    <a className="link link-hover  hover:text-rose-900">Register</a> 
    <a className="link link-hover  hover:text-rose-900" href='mailto:i.dheerajdileep@gmail.com'>Contact</a> 
    {/* <a className="link link-hover">Press kit</a> */}
  </nav> 
  <nav>
  <div className="grid grid-flow-col gap-4">
    <a href='mailto:i.dheerajdileep@gmail.com'>
      <FaEnvelope size={24} className="fill-current hover:text-rose-900" />
    </a>
    <a href='https://in.linkedin.com/in/students-association-of-information-technology-sait'>
      <FaLinkedin size={24} className="fill-current hover:text-rose-900" />
    </a>
    <a href='https://instagram.com/saitcusat?igshid=MzRlODBiNWFlZA=='>
      <FaInstagram size={24} className="fill-current hover:text-rose-900" />
    </a>
    <a href='https://wa.me/+919562784981'>
    <FaWhatsapp size={24} className="fill-current hover:text-rose-900" />
  </a>
  </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by SAIT CUSAT </p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;
