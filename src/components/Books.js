import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const Books = () => {
  const [BooksIsbn13, setBooksIsbn13] = useState(null);
  const { bookid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooksDataByIsnb13();
  }, [bookid]);

  const fetchBooksDataByIsnb13 = async () => {
    const data = await fetch(`https://api.itbook.store/1.0/books/${bookid}`);
    const json = await data.json();
    setBooksIsbn13(json);
    console.log(json);
  };

  const handleAddItem = (book) => {
    dispatch(addItem(book));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue via-slate-200 to-slate-500 text-gray-800">
      {BooksIsbn13 ? (
        <>
          {/* Book details section */}
          <div className="flex flex-col lg:flex-row items-center gap-10 p-8 animate-fade-in">
            <img
              src={BooksIsbn13.image}
              alt="Book"
              className="w-64 h-auto shadow-lg rounded-xl hover:scale-105 transition-transform duration-300"
            />
            <div className="text-left max-w-xl space-y-4">
              <h1 className="text-3xl font-bold text-slate-900">{BooksIsbn13.title}</h1>
              <p className="text-sm text-gray-600 font-mono">by {BooksIsbn13.authors}</p>
              <p className="text-md font-serif">
                <span className="font-semibold">Publisher: </span>
                {BooksIsbn13.publisher}
              </p>
              <p className="text-base italic text-gray-700">{BooksIsbn13.subtitle}</p>
              <p className="text-2xl font-bold text-green-600">{BooksIsbn13.price}</p>
              <button
                className="mt-4 px-6 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-md transition-all duration-300"
                onClick={() => handleAddItem(BooksIsbn13)}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-white shadow-inner p-8 mx-4 my-6 rounded-xl animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Product Description</h2>
            <p className="text-gray-700 font-light leading-relaxed">{BooksIsbn13.desc}</p>
          </div>

          {/* Other Details */}
          <div className="bg-white shadow-inner p-8 mx-4 my-6 rounded-xl animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Other Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-mono text-sm">
              <p><span className="font-bold">Title:</span> {BooksIsbn13?.title}</p>
              <p><span className="font-bold">Subtitle:</span> {BooksIsbn13?.subtitle}</p>
              <p><span className="font-bold">Authors:</span> {BooksIsbn13?.authors}</p>
              <p><span className="font-bold">ISBN13:</span> {BooksIsbn13?.isbn13}</p>
              <p><span className="font-bold">Publisher:</span> {BooksIsbn13?.publisher}</p>
              <p><span className="font-bold">Pages:</span> {BooksIsbn13?.pages}</p>
              <p><span className="font-bold">Year:</span> {BooksIsbn13?.year}</p>
              <p><span className="font-bold">Price:</span> {BooksIsbn13?.price}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="p-10 text-center text-xl text-gray-600 animate-pulse">
          Loading book details...
        </div>
      )}
    </div>
  );
};

export default Books;
