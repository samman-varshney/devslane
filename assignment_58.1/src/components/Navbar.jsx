import React from 'react'
import '../index.css' // Ensure your CSS file is imported
import amazonLogo from '../assets/amazonlogo.png' // Adjust the path as necessary

function Navbar() {
  return (
    <nav className='fixed top-0 right-0 w-full shadow-lg h-[50px] flex px-30 py-3 bg-white'><img className='h-full' src={amazonLogo} alt="Amazon Logo" /></nav>
  )
}

export default Navbar