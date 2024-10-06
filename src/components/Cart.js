import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import {  clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch=useDispatch();

  const handleClearCart=()=>{
    dispatch(clearCart());
  }






  return (
    <>
      <Header />
      <div className="text-center m-4 p-4 ">
        <h1 className="text-2xl font-bold  ">My Books Cart</h1>
        {cartItems.length===0 && <h1 className="text-red-700 font-bold">Your Cart IS "MT"</h1>}
        <div className="flex  flex-wrap  p-14">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col justify-between">
            <div className=" max-w-sm rounded overflow-hidden border border-zinc-300  m-4 p-3 w-[250px]  shadow-lg ">
                <img src={item.image} alt='bookimage' className="w-[80%] m-3 object-cover " />
        <div className=" ">
            <div className="font-normal mb-2 ">{item.title}</div>
             <p className=" text-base  mb-4 text-green-700">{item.subtitle}</p>
            <p className="text-gray-900 font-serif text-xl">{item.price}</p>
        <div>
            <button className="bg-black text-white p-2 m-3 rounded-lg text-[10px] hover:bg-red-600 hover:text-black">Buy Now</button>
           
        </div>
      </div>
      
   </div>

</div>
        ))}
       
        </div>


        <button className="p-2 m-2 bg-black text-white rounded" onClick={handleClearCart} >Clear Cart</button>
      </div>
    </>
  );
};

export default Cart