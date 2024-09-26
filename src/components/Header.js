
import React, { useState } from 'react'
import SearchedBooks from './SearchedBooks';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

    const [searchText,setSearchText]=useState('');

    const cartItems=useSelector((store)=>store.cart.items);

  return (  
    <div className=' bg-yellow-500  py-2 px-2  '>
        <div className='flex justify-between'>
        <div className=' mx-10 py-6 px-2 flex justify-between'>
        <Link to="/">
        <img src="https://res.cloudinary.com/dwhafna5q/image/upload/v1726751402/bookstore-removebg-preview_cosu58.png" alt='logo' className='w-[160px]' />
        </Link>
        </div>
            <div className='w-full max-w-sm min-w-[600px]'>
            <div className='relative flex mx-6 my-6 py-6 px-6'>
                <input 
                    type ="search" 
                    value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                     }} 
                    className='w-full bg-white placeholder:text-black text-slate-700 text-sm border border-slate-200 rounded-md px-2 py-2 transition duration-300 ease focus:outline-none focus:text-black hover:border-slate-300 shadow-sm focus:shadow'  placeholder='Search by Books,Authors..'/>
                <button
                    onClick={()=>{
                        <SearchedBooks />
                    }}
                    className='absolute top-0 right-0 m-6 flex items-center rounded bg-slate-800 py-2.5 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                    type='button'
                > 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-3 ml-3">
                        <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
        
        <div className='relative flex flex-row-reverse p-6'>
        <Link to="/cart" >  
            <span className='absolute top-5 right-6 bg-red-500 text-black font-bold text-2xl rounded-full px-2'>
              {cartItems.length}         
            </span>
         
            <img src="https://res.cloudinary.com/dwhafna5q/image/upload/v1726757286/cart-removebg-preview_vl3nsm.png" alt='cart' className='w-[80px] h-min  m-2' />
        </Link>

        <Link to="/login">
            <img src="https://res.cloudinary.com/dwhafna5q/image/upload/v1726756818/png-transparent-computer-icons-user-profile-encapsulated-postscript-icon-black-rectangle-black-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-removebg-preview_op8pvh.png" className='w-[80px] h-min px-2 py-6' alt='login'/>
        </Link>
        </div>

        </div>
    </div>
  )
}

export default Header