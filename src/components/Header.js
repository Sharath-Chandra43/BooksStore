import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Assuming you're using Firebase for authentication
import { auth } from '../utils/firebase';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/login');
    }).catch((error) => {
      // An error happened.
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchText}`);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility on button click
  };

  return (
    <div className='bg-yellow-500 px-4 flex flex-col w-screen'> {/* Base styles */}
      <div className='flex justify-between items-center'> {/* Top row */}
        <Link to="/">
          <img src="https://res.cloudinary.com/dwhafna5q/image/upload/v1726751402/bookstore-removebg-preview_cosu58.png" alt='logo' className='w-full sm:w-[180px]' />
        </Link>

        <div className='flex items-center'> {/* Search bar for all screens */}
          <form onSubmit={handleSearch} className={`${isOpen ? 'block' : 'hidden'} md:block`}>
            <div className='flex relative'>
              <div>
                <input
                  type="search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className={`
                    xs:w-[150px]  /* Extra small screens (up to 359px) */
                    sm:w-[250px]  /* Small screens (360px up to 639px) */
                    bg-white placeholder:text-black text-slate-700 text-sm border border-slate-200 rounded-md px-2 py-2 transition duration-300 ease focus:outline-none focus:text-black hover:border-slate-300 shadow-sm focus:shadow
                  `}
                  placeholder='Search by Books,Authors..'
                  aria-label="Search" // Added aria-label for accessibility
                />
              </div>
              <div className='absolute -right-4'>
                <button
                  type="submit"
                  className={`
                    flex items-center rounded bg-slate-800 py-1 px-0 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
                  `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-8 h-7 mr-3 ml-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className='md:hidden flex items-center'> {/* Menu button for small screens */}
          <button className='text-white focus:outline-none' onClick={toggleMenu}>
            <img
              src={isOpen ? 'https://res.cloudinary.com/dwhafna5q/image/upload/v1728292325/close-512__1_-removebg-preview_lasgbt.png' : 'https://res.cloudinary.com/dwhafna5q/image/upload/v1727989973/menu-removebg-preview_hbhdrg.png'}
              alt={isOpen ? 'Menu' : 'Cancel'}
              className="w-8 h-7 mr-3 ml-7"
            />
          </button>
        </div>

        <div className='hidden md:flex items-center'> {/* Navigation links for large screens */}
          <ul className='flex space-x-4'>
            <li><Link to="/" className='text-white hover:text-gray-800'>Home</Link></li>
            <li><Link to="/about" className='text-white hover:text-gray-800'>About</Link></li>
            <li><Link to="/contact" className='text-white hover:text-gray-800'>Contact</Link></li>
          </ul>
        </div>

        <div className='flex flex-row-reverse items-center'>
          <Link to="/login">
          <img src="https://res.cloudinary.com/dwhafna5q/image/upload/v1727754963/logout-icon-for-any-purposes-vector-removebg-preview_lmwkyj.png" alt='logout' className='w-[80px] h-min px-4 py-3 cursor-pointer' onClick={handleSignOut} />
          </Link>
          <Link to="/cart">
            <span className='absolute top-4 left-470 bg-red-700 text-white font-bold text-2xl rounded-full px-2'>
              {cartItems.length}
            </span>
            <img src="https://res.cloudinary.com/dwhafna5q/image/upload/v1726757286/cart-removebg-preview_vl3nsm.png" alt='cart' className='w-[80px] h-min  m-2' />
          </Link>
          <Link>
            <span>
              <img src="https://res.cloudinary.com/dwhafna5q/image/upload/v1726756818/png-transparent-computer-icons-user-profile-encapsulated-postscript-icon-black-rectangle-black-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-removebg-preview_op8pvh.png" className='w-[80px] h-min px-2 py-5' alt='login' />
            </span>
          </Link>
        </div>
      </div>

      {/* Menu content for small screens (to be displayed when the menu button is clicked) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className='mt-4 space-y-2'>
          <li><Link to="/" className='text-white hover:text-gray-800'>Home</Link></li>
          <li><Link to="/about" className='text-white hover:text-gray-800'>About</Link></li>
          <li><Link to="/contact" className='text-white hover:text-gray-800'>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;