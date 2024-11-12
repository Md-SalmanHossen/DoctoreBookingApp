import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 px-4 py-8 bg-gray-100 text-gray-800'>
      
      <div className='flex flex-col sm:flex-row sm:justify-between gap-10'>
        {/* Left side */}
        <div className='flex flex-col space-y-5 sm:w-1/3'>
          <img src={assets.logo} alt="Company Logo" className='w-40' />
          <p className='text-sm leading-6 text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Center side - Center-aligned */}
        <div className='text-center sm:text-left sm:w-1/3'>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='space-y-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right side */}
        <div className='text-center sm:text-left sm:w-1/3'>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='space-y-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>hossainsalman873@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright text */}
      <div className='mt-10'>
        <hr className='border-gray-300' />
        <p className='py-5 text-sm text-center'>
          Copyright © 2024 GreatStack - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
