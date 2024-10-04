import React, { useState, useEffect } from 'react'; // Adjusted based on provided code
import { BOOKS_API } from '../utils/constant';

const TopBookContainer = () => {
  const [book, setBook] = useState(null);

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
    // Assuming handleAddItem function
  };

  return (
    <div className="border border-cyan-50 xs:flex xs:flex-col">
      <div className="md:flex md:justify-between xs:justify-center">
        <img src={book?.image} alt="book" className="md:w-[430px] xs:w-full object-cover" />
        <div className="md:mr-32 xs:mt-24 grid grid-cols-1 md:grid-cols-auto">
          <h1 className="md:font-normal md:text-3xl xs:text-5xl">{book?.title}</h1>
          <h1 className="md:font-medium md:font-sans text-amber-800 border border-black p-2 m-4 md:w-full">{book?.subtitle}</h1>
          <h1 className="font-serif md:mt-4 md:text-2xl text-gray-900 xs:text-5xl">Price: {book?.price}</h1>
          <button className="md:p-2 md:m-3 md:text-xl bg-black text-white rounded-lg hover:bg-yellow-400 hover:text-black xs:text-4xl xs:p-2" onClick={() => handleAddItem(book)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>

  );
};

export default TopBookContainer;