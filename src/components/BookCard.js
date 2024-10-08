import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';


const BookCard = ({ booksData }) => {
  const { image, title, subtitle, price, isbn13 } = booksData;
  
  return (
    <div className="rounded overflow-hidden border border-zinc-300 hover:border-zinc-400 cursor-pointer m-4 p-3 md:w-[350px] shadow-lg xs:w-[70%] xs:p-4">
      <div className="">
        <img src={image} alt="bookimage" className="w-[80%] m-3 object-cover xs:w-56" />
        <div className="md:ml-4">
          <div className="font-normal mb-2 xs:text-xl xs:font-bold">{title}</div>
          <p className="text-base mb-4 text-green-700 xs:text-xl">{subtitle}</p>
          <p className="text-gray-900 font-serif text-xl xs:text-xl">{price}</p>
          
        </div>
      </div>
    </div>
  );
};

export default BookCard;