import React, { useState, useEffect } from 'react';

function TopBookContainer() {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchRandomBook();
  }, []);

  const fetchRandomBook = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/new')

        const data = await response.json();
      //  console.log(data.books[0]);
        const randomBook = data.books[Math.floor(Math.random() * data.books.length)];
        setBook(randomBook);

      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className='border border-cyan-50'>
    
        <div className='m-4 p-2 flex justify-center'>
          <div className='w-[600px]'>
            <img className='w-[80%] border-r-30' src={book?.image} alt='book' />
          </div>
          <div className='text-center p-48'>
            <h1 className='font-normal text-3xl'>{book?.title}</h1>
            <h1 className='font-medium font-sans text-amber-800 border border-black p-2 m-4'>{book?.subtitle}</h1>
            <h1 className='font-serif mt-4 text-2xl text-gray-900'>Price: {book?.price}</h1>
            <button className='p-2 m-3 bg-black text-white rounded-lg hover:bg-yellow-400 hover:text-black'>add to cart</button>
          </div>
         
        </div>
    </div>
  );
}

export default TopBookContainer;