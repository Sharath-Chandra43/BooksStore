import React, { useState, useEffect } from 'react';
import { BOOKS_API } from '../utils/constant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const TopBookContainer = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRandomBooks();
  }, []);

  const fetchRandomBooks = async () => {
    try {
      const response = await fetch(BOOKS_API);
      const data = await response.json();

      // Shuffle and take first 3 books
      const shuffled = data.books.sort(() => 0.5 - Math.random());
      const selectedBooks = shuffled.slice(0, 3);

      setBooks(selectedBooks);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleAddItem = (book) => {
    dispatch(addItem(book));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {loading ? (
        <div className="col-span-3 flex justify-center items-center">
          <div className="spinner-border animate-spin border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
        </div>
      ) : (
        books.map((book, index) => (
          <div
            key={index}
            className="border border-cyan-50 flex flex-col items-center p-6 bg-gradient-to-r from-blue-200 via-teal-300 to-yellow-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={book.image}
              alt="book"
              className="w-full h-60 object-contain rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
            <div className="mt-4 text-center">
              <h1 className="text-2xl font-extrabold text-gray-800">{book.title}</h1>
              <h2 className="text-sm font-medium text-gray-800 bg-white px-2 py-1 mt-2 rounded-md shadow">
                {book.subtitle}
              </h2>
              <h3 className="text-lg font-serif text-gray-900 mt-2">{book.price}</h3>
              <button
                className="mt-3 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105"
                onClick={() => handleAddItem(book)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TopBookContainer;
