import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


const Navbaar = () => {

  const [showMenu , setShowMenu] =useState(false)

  console.log(showMenu)

 
  return (

    <>
  
   <nav  className="   z-50 top-0 flex  h-28 bg-gradient-to-r from-purple-900 to-black text-white shadow shadow-slate-600 justify-between items-center text-lg font-light fixed w-[100%] ">
   <div  onClick={()=>setShowMenu(!showMenu)} className="hamburger mx-4 px-2 py-2 md:hidden  cursor-pointer">
     <MenuIcon />
    </div>
    {
      showMenu && (
       <div>
       <div className=' flex  flex-col pl-10 lg:hidden absolute bg-white w-[400px] h-[400px] ml-[-120px] mt-[43px]     '>

       <Link to="/" className=" text-black cursor-pointer py-2 font-semibold hover:text-red-400">
        Home</Link>
        <Link to="/about" className=" text-black  cursor-pointer py-2 font-semibold hover:text-red-400">
        About
      </Link>
      <Link to="/services" className=" text-black cursor-pointer py-2 font-semibold hover:text-red-400">
        Services</Link>
      <Link to="/portfolio" className=" text-black cursor-pointer py-2 font-semibold hover:text-red-400">
        Portfolio</Link>
      <Link to="/blogs" className=" text-black cursor-pointer py-2 font-semibold hover:text-red-400">
        Blogs</Link>
      <Link to="/contact" className=" text-black cursor-pointer py-2 font-semibold hover:text-red-400">
        Contact</Link>
        </div>
       </div>
      )
    }
   <div className="logobox font-semibold mx-20">
      <div className="logo"></div>
      <div className="sitename">Seek Solution</div>
    </div>

    <div className="  space-x-10 mx-14 hidden lg:block   ">

    <Link to="/" className="cursor-pointer py-2 font-semibold hover:text-red-400">
        Home</Link>
      <Link to="/about" className="cursor-pointer py-2 font-semibold hover:text-red-400">
        About
      </Link>
      <Link to="/services" className="cursor-pointer py-2 font-semibold hover:text-red-400">
        Services</Link>
      <Link to="/portfolio" className="cursor-pointer py-2 font-semibold hover:text-red-400">
        Portfolio</Link>
      <Link to="/blogs" className="cursor-pointer py-2 font-semibold hover:text-red-400">
        Blogs</Link>
      <Link to="/contact" className="cursor-pointer py-2 font-semibold hover:text-red-400">
        Contact</Link>

    
   
    </div>

    <button className=" btn mr-9 font-semibold border-2 border-white px-3 py-2 ml rounded-md hover:bg-white hover:text-black">
    Get A Quote
    </button>
    
  
  </nav>

  </>)
}

export default Navbaar