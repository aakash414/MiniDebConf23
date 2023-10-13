import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <div id='footer'>
      <footer className="footer bg-white relative pt-1 border-b-2 border-blue-700">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-y-6 gap-x-12 bg-white text-center m-[5%]">
        <a className='font-bold text-gray-700 uppercase flex-initial cursor-pointer' href='https://debian.org.in/' target='_blank'>Debian India</a>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mt-4 md:mt-0">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-rose-800 font-bold mb-2">
                © MiniDebConf Kochi'23
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
