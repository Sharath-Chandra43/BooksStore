import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart, decrementItem, orderCompleted } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const orderSuccessMessage = useSelector((state) => state.cart.orderSuccessMessage);
  const errorMessage = useSelector((state) => state.cart.errorMessage);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(orderCompleted());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (isbn13) => {
    dispatch(removeItem(isbn13));
  };

  const handleIncrementItem = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrementItem = (isbn13) => {
    dispatch(decrementItem(isbn13));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = Number(item.price.replace('$', ''));
    return isNaN(itemPrice) ? total : total + itemPrice * item.quantity;
  }, 0);

  useEffect(() => {
    console.log('Cart items changed');
  }, [cartItems.length]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">🛒 My Book Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-red-500 font-semibold text-xl">Your Cart Is Empty</div>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {cartItems.map((item, index) => (
            <div
              key={item.isbn13 || index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-4 w-full sm:w-[500px] flex items-center gap-4"
            >
              <img
                src={item.image}
                alt="book"
                className="w-24 h-24 object-cover rounded-lg border"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-1">{item.subtitle}</p>
                <p className="text-green-600 font-bold text-sm">Price: {item.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                    onClick={() => handleDecrementItem(item)}
                  >
                    -
                  </button>
                  <span className="px-2 font-semibold">{item.quantity}</span>
                  <button
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                    onClick={() => handleIncrementItem(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/dwhafna5q/image/upload/v1728382721/delete_jfiimy.png"
                alt="remove"
                className="w-7 h-7 ml-4 cursor-pointer hover:scale-110 transition-transform"
                onClick={() => handleRemoveItem(item)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Order Success */}
      {orderSuccessMessage && (
        <div className="text-center mt-6 text-green-600 font-semibold">
          {orderSuccessMessage}
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="text-center mt-6 text-red-600 font-semibold">{errorMessage}</div>
      )}

      {/* Total Price + Checkout */}
      {cartItems.length > 0 && (
        <div className="mt-10 text-right">
          <div className="text-lg font-semibold mb-4">
            Total Price: <span className="text-green-600 font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg transition"
            onClick={handleCheckout}
          >
            ✅ Checkout
          </button>
        </div>
      )}

      {/* Clear Cart Button */}
      {cartItems.length > 0 && (
        <div className="text-center mt-10">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg transition"
            onClick={handleClearCart}
          >
            🧹 Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
