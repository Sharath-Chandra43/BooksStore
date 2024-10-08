import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import ShimmerUI from './ShimmerUI'; // Assuming ShimmerUI component
import { BOOKS_API } from '../utils/constant';
import { Link } from 'react-router-dom';

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
      <h1 className="font-bold md:text-2xl text-center xs:text-4xl xs:mt-32">New Collections</h1>
      <div
        className={`grid gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center px-4 py-12 `} 
      >
        {newBooks === null ? (
          <ShimmerUI />
        ) : newBooks.length === 0 ? (
          <p>No results found.</p>
        ) : (
          newBooks.map((book) => (
            <Link to= {"/books/"+book.isbn13} key={book.isbn13}>
              <BookCard booksData={book}  />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default BooksContainer;