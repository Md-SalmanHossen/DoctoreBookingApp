import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div>
      {/* ....for left side..... */}
      <div>
         <p>Book Appointment <br /> With Trusted Doctors</p>
      </div>

      {/* .....for right side..... */}
      <div>
         <img src={assets.group_profiles} alt="" />
         <p></p>
      </div>
    </div>
  )
}

export default Header
