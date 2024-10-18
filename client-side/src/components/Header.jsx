import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 bg-primary'>
      {/* Left Side Content */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <div className='flex flex-col md:flex-row gap-3 text-sm text-white items-center font-light'>
          <img className='w-28' src={assets.group_profiles} alt="Profiles of trusted doctors" />
          <p>
            Simply browse through an extensive list of trusted doctors, 
            <br className='hidden sm:block' />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          className='flex items-center gap-2 bg-white rounded-full text-gray-500 px-8 py-3 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'
          href="#specialty"
        >
          Book appointment 
          <img className='w-3' src={assets.arrow_icon} alt="Arrow icon" />
        </a>
      </div>

      {/* Right Side Image */}
      <div className='md:w-1/2 relative'>
        <img
          className='w-full md:absolute bottom-0 h-auto rounded-lg'
          src={assets.header_img} 
          alt="Header visual of a medical professional" 
        />
      </div>
    </div>
  );
};

export default Header;
