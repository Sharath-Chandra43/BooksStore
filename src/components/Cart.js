import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };


  const handleRemoveItem   
 = (isbn13) => {
    dispatch(removeItem(isbn13));
  };

  const handleIncrementItem = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrementItem = (isbn13) => {
    dispatch(removeItem(isbn13));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = Number(item.price.replace('$', '')); // Remove dollar sign
    if (isNaN(itemPrice)) {
      console.warn('Invalid price:', item.price);
      return total;
    }
    return total + itemPrice * item.quantity;
  }, 0);


  useEffect(() => {
    console.log('Cart items changed, recalculating total');
  }, [cartItems.length]);  // Only run when cartItems.length changes

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Books Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-red-500">Your Cart Is Empty</div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {cartItems.map((item, index) => (
            <div
              key={item.isbn13 || index}
              className="bg-white rounded-lg shadow-md p-4 flex items-center"
            >
              <img
                src={item.image}
                alt="bookimage"
                className="w-24 h-24 mr-4 object-cover rounded-lg"
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">Title: {item.title}</h2>
                <p className="text-gray-500 mb-2">{item.subtitle}</p>
                <p className="text-green-500 font-bold">Price: ₹{item.price}</p>
                <div className="flex items-center">
                  <button
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg mr-2 hover:bg-gray-400 font-bold"
                    onClick={() => handleDecrementItem(item)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg ml-2 hover:bg-gray-400 font-bold"
                    onClick={() => handleIncrementItem(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <img 

               src='https://res.cloudinary.com/dwhafna5q/image/upload/v1728382721/delete_jfiimy.png' alt='remove'

               className="w-9 ml-9 cursor-pointer"

               onClick={() => handleRemoveItem(item)} />
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col justify-end mt-4">
        <div className="flex  justify-end mb-6 items-center">
          <p className="text-lg font-semibold mr-4">Total Price:</p>
         <p className="text-lg font-bold text-green-500">${totalPrice}</p>
         </div>
          <div className='flex'>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg ml-auto hover:bg-red-600">CheckOut</button>
          </div> 
        </div>
      
        <div className='text-center'>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-blue-600"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;