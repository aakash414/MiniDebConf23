import React from 'react'
import foss from '../assets/foss.svg'
import debindia from '../assets/debindia.svg'
import deb from '../assets/deb.svg'
import sait from '../assets/Images/SAIT.jpeg'
import cusat from '../assets/cusat.png'


function Sponsor() {
  return (
    <div className='flex justify-center items-center flex-col gap-y-auto bg-white pb-5'>
        <h1 className='font-bold md:text-6xl text-3xl ubuntu text-gray-900'>Our Sponsors</h1>
        <div className='grid md:grid-cols-2 md:max-w-md   gap-y-5 md:gap-x-28 w-full md:grid-col-1 pt-5 justify-center items-center m-5'>
            <img
                src={foss}
                className='object-fit w-full h-full ' // Full size on medium and larger screens
                alt='Sponsor 1'
            />
            <img
                src={deb}
                className='object-fit w-36 h-full' // Full size on medium and larger screens
                alt='Sponsor 2'
            />
        </div>
        <div className='flex justify-center gap-x-36 items-center gap-y-15 mt-14 md:flex-row flex-col'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='font-bold md:text-4xl text-3xl ubuntu text-gray-900'>Organising partners</h1>
                <div className='grid md:grid-cols-2 md:max-w-md   gap-y-5 md:gap-x-28 w-full md:grid-col-1 pt-5 justify-center items-center m-5'>
                    <img
                        src={debindia}
                        className='object-fit w-36 h-full ' // Full size on medium and larger screens
                        alt='Sponsor 1'
                    />
                    <img
                        src={sait}
                        className='object-fit w-36 h-full rounded-full' // Full size on medium and larger screens
                        alt='Sponsor 2'
                    />
                </div>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='font-bold md:text-4xl text-3xl ubuntu text-gray-900'>Venue partner</h1>
                <div className='flex  md:max-w-md  gap-y-5 md:gap-x-28 w-full  pt-5 justify-center items-center m-5 '>   
                    <img
                        src={cusat}
                        className='object-fit w-28' // Full size on medium and larger screens
                        alt='Sponsor 1'
                    />
                    {/* <img
                        src={deb}
                        className='object-fit w-full h-full' // Full size on medium and larger screens
                        alt='Sponsor 2'
                    /> */}
                </div>
            </div>
        </div>
    </div>


  )
}

export default Sponsor