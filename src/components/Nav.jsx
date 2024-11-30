import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css'
const Nav = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-base-100 mt-5">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-52 p-2 shadow space-y-2"
            > 
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/listed-books'>Listed Books</NavLink>
              <NavLink to='/pages-to-read'>Pages to Read</NavLink>
              
            </ul>
          </div>
          <a className="btn btn-ghost text-xl playfair-display font-extrabold text-3xl">Book Vibe</a>
        </div>
        <div className=" ">
          <ul className="menu menu-horizontal px-1 hidden lg:flex gap-10 items-center ">
              <NavLink className={({isActive})=>isActive ? 'border border-[#23BE0A]  px-4 py-2 text-[#23BE0A] rounded-lg text-xl':'work-sans font-normal text-xl text-[#131313CC] hover:bg-gray-400 hover:px-4 py-2  hover:text-orange-400 hover:rounded-lg hover:duration-500'  } to='/'>Home</NavLink>
              <NavLink className={({isActive}) => isActive? 'border border-[#23BE0A] px-4 py-2 text-[#23BE0A] rounded-lg text-xl':'work-sans font-normal text-xl text-[#131313CC] hover:bg-gray-400 hover:px-4 py-2  hover:text-orange-400 hover:rounded-lg hover:duration-500' } to='/listed-books'>Listed Books</NavLink>
              <NavLink className={({isActive}) => isActive? 'border border-[#23BE0A] px-4 py-2 text-[#23BE0A] rounded-lg text-xl':'work-sans font-normal text-xl text-[#131313CC] hover:bg-gray-400 hover:px-4 py-2  hover:text-orange-400 hover:rounded-lg hover:duration-500'} to='/pages-to-read'>Pages to Read</NavLink>
          </ul>
        </div>
        <div className="flex gap-4">
          <div className="">
            <a className="btn  bg-[#23BE0A] px-5 text-white work-sans">Sign In</a>
          </div>
          <div className="">
            <a className="btn bg-[#59C6D2] px-5 text-white  work-sans">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
