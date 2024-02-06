import React from 'react'
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  return (
   <header className=' bg-slate-300 p-4 flex justify-between shadow-xl '>
   <h1 className='font-bold  '>Where in the world?</h1>
   <button className=' flex gap-1 items-center font-semibold'>
   <FaRegMoon />
     DarkMode 
   </button>
   </header>
   
  )
}

export default Navbar