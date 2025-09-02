import React, { useState, useContext, useCallback } from 'react'
import '../index.css'
import amazonLogo from '../assets/amazonlogo.png'
import { FaCartShopping } from 'react-icons/fa6';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AlertContext, UserContext } from './Context';

function Navbar({ totalQuantity }) {
  const { user, setUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const {setAlert} = useContext(AlertContext);
  const navigate = useNavigate();

  const handleLogoClick = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Match the duration of the animation
  },[])

  const handleLogout = useCallback(() => { 
    localStorage.removeItem('token'); 
    const full_name = user?.full_name || '';
    setAlert({type: 'success', message: `See you soon ${full_name}`})
    setUser(null); 
    navigate('/signIn');
  }, [])


  return (
    <nav className="w-full shadow-lg h-[50px] bg-white flex justify-center">
      <div className="max-w-6xl w-full flex items-center justify-between px-6">
        <div
          className="relative h-[30px] w-[100px] overflow-hidden"
          onClick={handleLogoClick}
        >
          <img
            className={`h-[30px] absolute transition-all duration-1000 ease-in-out ${isAnimating
                ? 'translate-x-[100px] opacity-0'
                : 'translate-x-0 opacity-100'
              }`}
            src={amazonLogo}
            alt="Amazon Logo"
          />
          <img
            className={`h-[30px] absolute transition-all duration-1000 ease-in-out ${isAnimating
                ? 'translate-x-0 opacity-100'
                : 'translate-x-[-100px] opacity-0'
              }`}
            src={amazonLogo}
            alt="Amazon Logo"
          />
        </div>

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
              </Link><div className="block px-4 py-2 text-gray-700 hover:text-red-400 cursor-pointer" onClick={handleLogout}>Logout</div></>)
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
                    <div className="block px-4 py-2 text-gray-700 hover:text-red-400 cursor-pointer" onClick={handleLogout}>Logout</div>
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