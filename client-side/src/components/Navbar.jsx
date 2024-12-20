
import { assets } from "../assets/assets_frontend/assets";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate=useNavigate();

  const [showMenu,setShowMenu]=useState(false);
  const [token,setToken]=useState(true);

  return (
    <div className="flex items-center justify-between text-sm mb-5 py-3 border-b  border-b-gray-400 ">
      
      <img 
        className="w-[124px] cursor-pointer" 
        src={assets.logo} 
        alt="Logo" 
      />

      <ul className="hidden md:flex md:items-start gap-5 font-medium">
        
        <NavLink to='/'>
          <li className="py-1">Home</li>
          <hr className="border-none hidden outline-none h-0.5 bg-primary w-3/5 m-auto"/>
        </NavLink>

        <NavLink to='/doctors'>
          <li className="py-1">ALl Doctors</li>
          <hr className="border-none hidden outline-none h-0.5 bg-primary w-3/5 m-auto"/>
        </NavLink>

        <NavLink to='/about'>
          <li className="py-1">About</li>
          <hr className="border-none hidden outline-none h-0.5 bg-primary w-3/5 m-auto"/>
        </NavLink>

        <NavLink to='/contact'>
          <li className="py-1">Contact</li>
          <hr className="border-none hidden outline-none h-0.5 bg-primary w-3/5 m-auto"/>
        </NavLink>

      </ul>

      <div className="flex items-center gap-4">
        {
          token 
          ? <div className="flex items-center gap-2 cursor-pointer group relative">

              <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />

              <div className="absolute top-full right-0 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p onClick={()=>navigate('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                  <p onClick={()=>navigate('my-appointments')} className="hover:text-black cursor-pointer">My Appointment</p>
                  <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                </div>
              </div> 
          </div>
          :<button 
            className="bg-primary text-white px-8 py-3 rounded-full font-light md:block"
            onClick={()=>navigate('/login')}
          >Create Account</button>
        }

      </div>

    </div>
  );
};

export default Navbar;
