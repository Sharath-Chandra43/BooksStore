import React, { useState, useEffect } from 'react'; // Adjusted based on provided code
import { BOOKS_API } from '../utils/constant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const TopBookContainer = () => {
  const [book, setBook] = useState(null);
   const dispatch=useDispatch()


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

  const handleAddItem=(book)=>{

     dispatch(addItem(book));
    
     }

  return (
     <div className="border border-cyan-50 flex flex-col items-center">
    <div className="w-full md:flex md:justify-between">
      <img src={book?.image} alt="book" className="w-full md:w-1/2 object-cover sm:w-2/3 sm:pl-4 sm:ml-36" />
      <div className="md:ml-4 md:p-56 sm:p-5 sm:text-center">
        <h1 className="text-2xl md:text-3xl font-bold">{book?.title}</h1>
        <h1 className="text-lg md:text-xl font-medium text-amber-800 border border-black p-2 m-4">{book?.subtitle}</h1>
        <h1 className="text-xl md:text-2xl font-serif text-gray-900 xs:mb-7">{book?.price}</h1>
        <button className="md:px-4 md:py-2 sm:px-2 sm:py-2 bg-black text-white rounded-lg hover:bg-yellow-400 hover:text-black"  onClick={() => handleAddItem(book)} >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  );
};

export default TopBookContainer;