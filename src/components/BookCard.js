import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const BookCard = (props) => {
  const {booksData}=props;

  const {
    image,
    title,
    subtitle,
    price,
    isbn13,
  }=booksData
     
  const dispatch=useDispatch()

     
  const handleAddItem=(booksData)=>{
    dispatch(addItem(booksData));
  }


  return (
    <div>
      <div className=" max-w-sm rounded overflow-hidden border border-zinc-300  m-4 p-3 w-[250px]  shadow-lg ">
       <img src={image} alt='bookimage' className="w-[80%] m-3 object-cover " />
      <div >
        <div className="font-normal mb-2 ">{title}</div>
        <p className=" text-base  mb-4 text-green-700">{subtitle}</p>
        <p className="text-gray-900 font-serif text-xl">{price}</p>
      </div>
      <button className='p-2 m-3 bg-black text-white rounded-lg hover:bg-yellow-400 hover:text-black' 
      onClick={()=>handleAddItem(booksData)}>add to cart</button>
      </div>
   </div>
  );

}

export default BookCard