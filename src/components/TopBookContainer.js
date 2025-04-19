import React, { useState, useEffect } from 'react'; // Adjusted based on provided code
import { BOOKS_API } from '../utils/constant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const TopBookContainer = () => {
  const [book, setBook] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRandomBook();
  }, []);

  const fetchRandomBook = async () => {
    try {
      const response = await fetch(BOOKS_API);
      const data = await response.json();
      const randomBook = data.books[Math.floor(Math.random() * data.books.length)];
      setBook(randomBook);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddItem = (book) => {
    dispatch(addItem(book));
  };

  return (
    <div className="border border-cyan-50 flex flex-col items-center p-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-full md:flex md:justify-between items-center">
        <img
          src={book?.image}
          alt="book"
          className="w-full md:w-1/2 object-cover sm:w-2/3 sm:pl-4 sm:ml-36 rounded-lg transform transition-transform duration-500 hover:scale-105"
        />
        <div className="ml-7 md:p-56 sm:p-5 sm:text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">{book?.title}</h1>
          <h2 className="text-lg md:text-xl font-medium text-amber-800 border-2 border-gray-300 rounded-md p-2 m-4 bg-white opacity-80 hover:opacity-100 transition-opacity duration-300">
            {book?.subtitle}
          </h2>
          <h3 className="text-xl md:text-2xl font-serif text-gray-900 xs:mb-7">{book?.price}</h3>
          <button
            className="md:px-6 md:py-3 sm:px-4 sm:py-2 bg-black text-white rounded-lg transform hover:bg-yellow-400 hover:text-black transition-all duration-300 ease-in-out hover:scale-105"
            onClick={() => handleAddItem(book)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBookContainer;
