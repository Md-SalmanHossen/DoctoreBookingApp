
import { assets } from "../assets/assets_frontend/assets";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-sm mb-5 py-4 border-b  border-b-gray-400 ">
      
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

      <button>Create Account</button>
    </div>
  );
};

export default Navbar;
