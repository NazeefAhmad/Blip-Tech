import React from "react";
import { NavLink } from "react-router-dom";
import AddToCart from "../Buttons/AddToCart";
import RemoveFromWishList from "../Buttons/RemoveFromWishList.jsx";

const WishItem = ({ id, name, price, imgSrc }) => {
  return (
    <div className=" w-[100%] bg-[#373d4e] relative mb-8 py-4 px-6">
      <div className="flex flex-col lg:gap-16 lg:flex-row">
        <NavLink to={`/product/${id}`} onClick={()=> window.scrollTo(0,0)}>
          <div className="lg:w-[300px]">
            <img src={imgSrc} className="w-[100%] select-none" />
          </div>
        </NavLink>
        <div className="flex flex-col pt-6">
          <div className=" p-2 ">
            <NavLink to={`/product/${id}`} onClick={()=> window.scrollTo(0,0)}>
              <h3 className="text-xl mb-2 hover:text-gray-400">{name}</h3>
            </NavLink>
            <p className="text-lime-300">&#8377; {price}</p>
          </div>
          <div className="p-2">
          <AddToCart
            id={id} 
            name={name} 
            price={404} 
            imgSrc={imgSrc}
            />
          </div>
          <div className="p-2 mt-4 text-sm z-10 right-2 bottom-0 lg:absolute lg:mt-0">
            <RemoveFromWishList id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishItem;
