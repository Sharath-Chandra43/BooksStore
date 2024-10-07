import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';


const BookCard = ({ booksData }) => {
  const { image, title, subtitle, price, isbn13 } = booksData;
   const dispatch=useDispatch()
  const handleAddItem=(booksData)=>{

     dispatch(addItem(booksData));
    
     }


  return (
    <div className="rounded overflow-hidden border border-zinc-300 m-4 p-3 md:w-[250px] shadow-lg xs:w-[90%] xs:p-4">
      <div className="">
        <img src={image} alt="bookimage" className="w-[80%] m-3 object-cover" />
        <div className="md:ml-4">
          <div className="font-normal mb-2 xs:text-xl xs:font-bold">{title}</div>
          <p className="text-base mb-4 text-green-700 xs:text-xl">{subtitle}</p>
          <p className="text-gray-900 font-serif text-xl xs:text-xl">{price}</p>
          <button
            className="xs:px-2 xs:py-2 xs:text-xs xl:mt-6 md:p-2 md:m-3 bg-black text-white rounded-lg hover:bg-yellow-400 hover:text-black"
            onClick={() => handleAddItem(booksData)} 
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;