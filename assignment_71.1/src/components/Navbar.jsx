import React, {useState} from 'react'
import '../index.css'
import amazonLogo from '../assets/amazonlogo.png'
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Navbar({ totalQuantity }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full shadow-lg h-[50px] bg-white flex justify-center">
      <div className="max-w-6xl w-full flex items-center justify-between px-6">
        
      
        <Link to="/">
          <img className="h-[30px]" src={amazonLogo} alt="Amazon Logo" />
        </Link>

       
        <div className="flex items-center gap-6" >

          <div className="hidden sm:flex items-center gap-2">
            <Link to="/" className="text-gray-700 hover:text-red-500 mr-5">
              Products
            </Link>
            <Link to="/signIn" className="text-gray-700 hover:text-red-500">
              SignIn
            </Link>
            <span>/</span>
            <Link to="/signUp" className="text-gray-700 hover:text-red-500">
              SignUp
            </Link>
          </div>

          <div className='relative sm:hidden'>
            <FaBars className='text-2xl text-gray-700' onClick={() => setIsMenuOpen(!isMenuOpen)} />
            {isMenuOpen && (
              <div className='absolute top-8 -right-12 bg-white shadow-lg rounded-md mt-2 w-32 z-10'>
                <Link to="/signIn" className="block px-4 py-2 text-gray-700 hover:text-red-400">Sign In</Link>
                <hr />
                <Link to="/signUp" className="block px-4 py-2 text-gray-700 hover:text-red-400">Sign Up</Link>
                <hr />
                <Link to="/home" className="block px-4 py-2 text-gray-700 hover:text-red-400">Home</Link>
              </div>
            )}
          </div>

          <div className="relative">
            <Link to="/cart">
              <FaCartShopping className="text-3xl text-red-300" />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 left-5 flex items-center justify-center text-xs font-bold text-green-700 bg-green-400 w-5 h-5 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
