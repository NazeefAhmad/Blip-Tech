import React from "react";
import { NavLink } from "react-router-dom";
import RemoveFromCart from "../Buttons/RemoveFromCart.jsx"

const CartItem = ({ id, name, price, imgSrc }) => {
  return (
    <div className=" w-[100%] bg-[rgba(0,0,0,0.2)] relative mb-8 p-2">
      <div className="flex items-center flex-col gap-8 lg:flex-row lg:gap-16">
        <NavLink to={`/product/${id}`} onClick={()=> window.scrollTo(0,0)}>
          <div className="lg:w-[200px]">
            <img src={imgSrc} className="w-[100%] select-none" alt="game-image" />
          </div>
        </NavLink>
        <div className="w-[100%] flex flex-col lg:w-auto" >
          <div className=" p-2 ">
            <h3 className=" mb-2 text-xl lg:text-base">{name}</h3>
            <p className="text-lime-300">&#8377; {price}</p>
          </div>
          <div className="p-2 mt-4 text-sm z-10 right-2 bottom-0 lg:absolute lg:mt-0">
            <RemoveFromCart id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
