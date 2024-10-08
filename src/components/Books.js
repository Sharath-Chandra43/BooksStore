import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

import BookCard from './BookCard';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';



const Books = () => {



 const [BooksIsbn13,setBooksIsbn13]=useState(null);



 const {bookid}=useParams()



 useEffect(() => {

  fetchBooksDataByIsnb13();

 }, [bookid]);


  const dispatch=useDispatch()
 const handleAddItem=(BooksIsbn13)=>{

    dispatch(addItem(BooksIsbn13));
   
    }






 const fetchBooksDataByIsnb13=async()=>{

 const data= await fetch(`https://api.itbook.store/1.0/books/${bookid}`)



   const json=await data.json();

     setBooksIsbn13(json)

 console.log(json);

 }



// const {title,subtitle,isbn13,authors,publisher,pages,year,rating,desc,price,image}=BooksIsbn13



 return (

  <div>
      {BooksIsbn13 ? (
        <>
          {/* Display book details using destructuring */}
          <div className='flex flex-row justify-start'>
             <div >
                <img src={BooksIsbn13.image} alt='bookImage' className='ml-4 xs:w-64 xs:ml-11 xs:mt-24' />
              </div>
              <div className='p-16'>
                <h1 className='font-bold mt-2'> {BooksIsbn13.title}</h1>
                <p className='mt-2 font-mono'>{BooksIsbn13.authors}</p>
                <p className=' mt-3 mb-3 font-serif'> <span className='font-semibold'>Published By: </span> {BooksIsbn13.publisher}</p>
                <p> {BooksIsbn13.subtitle}</p>
                <p className='font-bold mt-4'> {BooksIsbn13.price}</p>
                <button
                      className="xs:mt-5 xs:px-2 xs:py-2 xs:text-xs xl:mt-6 md:p-2 md:m-3 bg-black text-white rounded-lg hover:bg-yellow-400 hover:text-black"
                      onClick={() => handleAddItem(BooksIsbn13)} 
                 >
                   Add to Cart
                </button>
              </div>
          </div>
          <br/>
          <div className='p-7'>
            <h1 className='text-2xl font-bold'> Product Description</h1>
            <p className='font-mono mt-5' >{BooksIsbn13.desc}</p>
          </div>
          {/* ... other details */}
          <div className='p-7'>
            <h1 className='text-2xl font-bold'>Other Details</h1>
            <div className='flex flex-col p-7'>
              <p > <span className='font-bold mb-8'>Title: </span>  {BooksIsbn13?.title} </p>
              <p > <span className='font-bold mb-8'>subtitle: </span>  {BooksIsbn13?.subtitle} </p>
              <p > <span className='font-bold mb-8'>authors: </span>  {BooksIsbn13?.authors} </p>
              <p > <span className='font-bold mb-8'>isbn13: </span>  {BooksIsbn13?.isbn13} </p>
              <p > <span className='font-bold mb-8'>publisher: </span>  {BooksIsbn13?.publisher} </p>
              <p > <span className='font-bold mb-8'>pages: </span>  {BooksIsbn13?.pages} </p>
              <p > <span className='font-bold mb-8'>years: </span>  {BooksIsbn13?.years} </p>
              <p > <span className='font-bold mb-8'>price: </span>  {BooksIsbn13?.price} </p>
             
            </div>
          </div>
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
 )

}



export default Books