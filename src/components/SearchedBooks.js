import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import BookCard from './BookCard';

const SearchedBooks = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) return;

      const response = await fetch(`https://api.itbook.store/1.0/search/${searchQuery}`);
      const data = await response.json();
      setSearchResults(data.books || []);
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="grid gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center px-4 py-12 ">
      {searchResults.map((book) => (
         <Link to= {"/books/"+book.isbn13} key={book.isbn13}>
            <BookCard  booksData={book} />
        </Link>
      ))}
    </div>
  
  );
};

export default SearchedBooks;