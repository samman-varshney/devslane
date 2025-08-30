import React from 'react'
import '../index.css'
import amazonLogo from '../assets/amazonlogo.png'
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Navbar({ totalQuantity }) {
  return (
    <nav className='w-full shadow-lg h-[50px] bg-white flex justify-center'>
      <div className='max-w-6xl w-full flex items-center justify-between px-6'>
        <Link to="/">
          <img className='h-[30px]' src={amazonLogo} alt="Amazon Logo" />
        </Link>

        <div className="relative">
          <Link to="/cart">
          <FaCartShopping className='text-3xl text-red-300' />
          {totalQuantity > 0 && (
            
              <span className="absolute top-[-5px] left-5 flex items-center justify-center text-xs font-bold text-green-700 bg-green-400 w-4.5 h-4.5 border rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
