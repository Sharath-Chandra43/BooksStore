import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import BookCard from './BookCard';

const SearchedBooks = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { search } = useLocation();
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
    <div className="flex flex-wrap ">
      {searchResults.map((book) => (
        <BookCard key={book.isbn13} booksData={book} />
      ))}
    </div>
  );
};

export default SearchedBooks;