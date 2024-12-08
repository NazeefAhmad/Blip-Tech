import React from "react";
import CartItem from "./CartItem.jsx";
import { NavLink } from "react-router-dom";
import useCartStore from "../store/cartStore.js";
import { toast } from "react-toastify";

const Cart = () => {

  const cart = useCartStore((state)=> state.cart);
  const emptyCart = useCartStore((state)=> state.emptyCart);
  let totalPrice = 0;
  cart.forEach(cartitem => {
    totalPrice += cartitem.price;
  });

  const handleEmptyCart = ()=>{
    emptyCart();
    toast.success("Cart cleared.");
  }

  return (
    <main className="max-w-[1280px] mx-auto px-4 py-8 bg-[#1f2937] text-white min-h-[100vh]">
      <section className="lg:px-20">
        <h2 className="text-2xl font-bold mb-2">Your Shopping Cart</h2>
        <h3 className=" text-sm mb-8">Items added to cart will appear here.</h3>
        <div className="flex flex-col-reverse justify-between lg:flex-row">
          <div className=" w-[100%] lg:w-[55%]">
           {
               cart.length === 0 ?
               <p>Your Cart is Empty</p> :
               cart.map((cartItem) => (
                 <CartItem 
                   key={cartItem.id}
                   id={cartItem.id}
                   name={cartItem.name}
                   price={cartItem.price}
                   imgSrc={cartItem.imgSrc} 
                 />
               ))
           }
          </div>
          <div className=" mb-8 w-[100%] h-fit bg-[rgba(0,0,0,0.2)] top-[2%] z-10 px-4 py-6 lg:w-[40%] lg:sticky lg:mb-0">
            <div className="flex justify-between mb-5">
              <p>Estimated Total:</p>
              <p className=" font-semibold ">&#8377; {totalPrice}</p>
            </div>
            <div className="text-center">
              <button className="block w-[100%] bg-blue-800 px-2 py-3 text-sm custom-shadow hover:bg-blue-700 active:bg-blue-800 transition ease-in-out duration-500">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex justify-between mt-8 lg:w-[55%]">
          <NavLink to="/" onClick={()=> window.scrollTo(0,0)} >
            <button className="bg-gray-900 text-sm px-3 py-2 transition ease-in-out duration-500 hover:bg-gray-700">{ cart.length === 0 ? "Browse Games" :"Continue Shopping"}</button> 
          </NavLink>
         { cart.length !== 0 && <button className="text-sm hover:text-gray-400" onClick={handleEmptyCart}>Remove all items</button> }
        </div>
      </section>
    </main>
  );
};

export default Cart;

