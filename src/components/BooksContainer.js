import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
// import ShimmerUI from './ShimmerUI'; // Assuming ShimmerUI component
import { BOOKS_API } from '../utils/constant';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const BooksContainer = () => {
  const [newBooks, setNewBooks] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(BOOKS_API);
      const data = await response.json();
      const accurateData = data.books;
      setNewBooks(accurateData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="font-extrabold md:text-3xl xs:text-4xl text-center text-white mt-32 px-4 py-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-md shadow-lg">
        New Collections
      </h1>
      <div
        className={`grid gap-6 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center px-4 py-12 bg-gradient-to-r from-teal-50 via-green-100 to-blue-50`}
      >
        {newBooks === null ? (
          <Loader />
        ) : newBooks.length === 0 ? (
          <p className="text-center text-lg font-medium text-gray-700">No results found.</p>
        ) : (
          newBooks.map((book) => (
            <Link to={"/books/" + book.isbn13} key={book.isbn13}>
              <BookCard booksData={book} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default BooksContainer;
