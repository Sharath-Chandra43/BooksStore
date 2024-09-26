import React, { useEffect, useState } from 'react'
import BookCard from './BookCard';
import ShimmerUI from './ShimmerUI';
import { BOOKS_API } from '../utils/constant';

const BooksContainer = () => {
  const [newBooks,setNewBooks]=useState(null);
  
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks= async()=>{
    try{
    const response= await fetch(BOOKS_API);

    const data=await response.json();
    //console.log(accurateData)
    const accurateData=data.books
   setNewBooks(accurateData)
    }
    catch(error){
      console.log(error);
    }
  }


  return (
    
  <div className="">
        <h1 className='font-bold text-2xl text-center'>New Collections</h1>
  <div className='px-12 flex flex-wrap'>
        {newBooks === null ? (
          <ShimmerUI />
        ) : newBooks.length === 0 ? (
          <p>No results found.</p>
        ) : (
          newBooks.map((book) => (
            <BookCard booksData={book} key={book.isbn13} />
          ))
        )}
      </div>
      </div>
  );
};


export default BooksContainer