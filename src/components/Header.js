import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const cartLength = useSelector((state) => state.cart.cartLength);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate('/login'))
      .catch((error) => console.error('Sign-out error', error));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim() === '') {
      setSearchError(true);
    } else {
      setSearchError(false);
      navigate(`/search?query=${searchText}`);
      setSearchText('');
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#8B5C5D] via-[#7E4B3B] to-[#4E3629] p-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center">
        
        {/* Logo with shadow for better visibility */}
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dwhafna5q/image/upload/v1726751402/bookstore-removebg-preview_cosu58.png"
            alt="Bookstore Logo"
            className="w-32 md:w-44 transition-transform hover:scale-105 shadow-lg"
          />
        </Link>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className={`${isOpen ? 'block' : 'hidden'} md:block`}
        >
          <div className="flex items-center relative">
            <input
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search books, authors..."
              className="xs:w-[150px] sm:w-[250px] md:w-[300px] bg-white text-black placeholder-gray-500 text-sm rounded-l-md py-2 px-4 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-[#8B5C5D] transition"
            />
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 text-white rounded-r-md p-2 flex items-center transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {searchError && (
            <p className="text-red-600 text-xs mt-1">Please enter a search term.</p>
          )}
        </form>

        {/* Menu toggle button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none ml-2"
          onClick={toggleMenu}
        >
          <img
            src={
              isOpen
                ? 'https://res.cloudinary.com/dwhafna5q/image/upload/v1728292325/close-512__1_-removebg-preview_lasgbt.png'
                : 'https://res.cloudinary.com/dwhafna5q/image/upload/v1727989973/menu-removebg-preview_hbhdrg.png'
            }
            alt="Menu Icon"
            className="w-8 h-8"
          />
        </button>

        {/* Links for desktop */}
        <nav className="hidden md:flex items-center space-x-6 ml-6">
          <Link to="/" className="text-white hover:text-gray-900 transition">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-900 transition">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-900 transition">Contact</Link>
        </nav>

        {/* Profile, Cart, Logout */}
        <div className="hidden md:flex items-center space-x-4 ml-6">
          <Link to="/cart" className="relative">
            <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs font-bold rounded-full px-2">
              {cartLength}
            </span>
            <img
              src="https://res.cloudinary.com/dwhafna5q/image/upload/v1726757286/cart-removebg-preview_vl3nsm.png"
              alt="Cart"
              className="w-10 hover:scale-110 transition-transform"
            />
          </Link>

          <Link>
            <img
              src="https://res.cloudinary.com/dwhafna5q/image/upload/v1726756818/png-transparent-computer-icons-user-profile-encapsulated-postscript-icon-black-rectangle-black-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-removebg-preview_op8pvh.png"
              alt="Profile"
              className="w-10 hover:scale-110 transition-transform"
            />
          </Link>

          <button onClick={handleSignOut}>
            <img
              src="https://res.cloudinary.com/dwhafna5q/image/upload/v1727754963/logout-icon-for-any-purposes-vector-removebg-preview_lmwkyj.png"
              alt="Logout"
              className="w-10 hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <nav className="flex flex-col items-start pl-2 space-y-2">
            <Link to="/" className="text-white hover:text-gray-900 transition">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-900 transition">About</Link>
            <Link to="/contact" className="text-white hover:text-gray-900 transition">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4 mt-4 pl-2">
            <Link to="/cart" className="relative">
              <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs font-bold rounded-full px-2">
                {cartLength}
              </span>
              <img
                src="https://res.cloudinary.com/dwhafna5q/image/upload/v1726757286/cart-removebg-preview_vl3nsm.png"
                alt="Cart"
                className="w-10 hover:scale-110 transition-transform"
              />
            </Link>

            <Link>
              <img
                src="https://res.cloudinary.com/dwhafna5q/image/upload/v1726756818/png-transparent-computer-icons-user-profile-encapsulated-postscript-icon-black-rectangle-black-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-removebg-preview_op8pvh.png"
                alt="Profile"
                className="w-10 hover:scale-110 transition-transform"
              />
            </Link>

            <button onClick={handleSignOut}>
              <img
                src="https://res.cloudinary.com/dwhafna5q/image/upload/v1727754963/logout-icon-for-any-purposes-vector-removebg-preview_lmwkyj.png"
                alt="Logout"
                className="w-10 hover:scale-110 transition-transform"
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
