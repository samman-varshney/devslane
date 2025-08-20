import React from 'react'
import '../index.css' // Ensure your CSS file is imported
import amazonLogo from '../assets/amazonlogo.png' // Adjust the path as necessary

function Navbar() {
  return (
    <nav className='w-full shadow-lg h-[50px] flex px-30 py-3 mb-5'><img className='h-full' src={amazonLogo} alt="Amazon Logo" /></nav>
  )
}

export default Navbar