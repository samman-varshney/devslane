import React, { useState, useContext } from 'react'
import '../index.css'
import amazonLogo from '../assets/amazonlogo.png'
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { UserContext } from './Context';

function Navbar({ totalQuantity }) {
  const { user, setUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full shadow-lg h-[50px] bg-white flex justify-center">
      <div className="max-w-6xl w-full flex items-center justify-between px-6">



        <img className="h-[30px]" src={amazonLogo} alt="Amazon Logo" />



        <div className="flex items-center gap-6" >

          <div className="hidden sm:flex items-center gap-2">
            
            {!user ? (<>
              <Link to="/signIn" className="text-gray-700 hover:text-red-500">
                SignIn
              </Link>
              <span>/</span>
              <Link to="/signUp" className="text-gray-700 hover:text-red-500">
                SignUp
              </Link></>) : (<><Link to="/" className="text-gray-700 hover:text-red-500 ">
              Products
            </Link><div className="block px-4 py-2 text-gray-700 hover:text-red-400 cursor-pointer" onClick={()=>{setUser(null);localStorage.removeItem('token');window.location = '/signIn'}}>Logout</div></>)
            }
          </div>

          <div className='relative sm:hidden'>
            <FaBars className='text-2xl text-gray-700' onClick={() => setIsMenuOpen(!isMenuOpen)} />
            {isMenuOpen && (
              <div className='absolute top-8 -right-12 bg-white shadow-lg rounded-md mt-2 w-32 z-10'>
                {!user ? (<>
                  <Link to="/signIn" className="text-gray-700 hover:text-red-500">
                    SignIn
                  </Link>
                  <hr />
                  <Link to="/signUp" className="text-gray-700 hover:text-red-500">
                    SignUp
                  </Link></>) :

                (<><Link to="/home" className="block px-4 py-2 text-gray-700 hover:text-red-400">Home</Link><hr />
                  <div className="block px-4 py-2 text-gray-700 hover:text-red-400 cursor-pointer" onClick={()=>{setUser(null);localStorage.removeItem('token');window.location = '/signIn'}}>Logout</div>
                </>)
}
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
