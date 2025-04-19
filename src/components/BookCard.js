import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const BookCard = ({ booksData }) => {
  const { image, title, subtitle, price, isbn13 } = booksData;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(booksData));
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl overflow-hidden border border-gray-200 bg-white hover:bg-blue-50 transition-all duration-300 m-4 p-4 w-full max-w-xs md:max-w-sm shadow-md hover:shadow-xl cursor-pointer">
      <img
        src={image}
        alt="book cover"
        className="w-full h-64 object-cover mb-4 transition-transform duration-300 hover:scale-105"
      />

      <div className="flex flex-col gap-2 px-2 flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-sm text-orange-600 font-medium">{subtitle}</p>
        <p className="text-lg font-bold text-green-600">{price}</p>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;
