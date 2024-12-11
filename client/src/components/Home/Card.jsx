import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ id, name, url, price }) => {
  return (
    <div className="w-[300px]">
      <NavLink to={`/product/${id}`} onClick={()=>window.scrollTo(0,0)}>
        <div className=" w-[300px] custom-shadow ">
          <img src={url} className="w-[100%] select-none" alt="game-image" />
          <div className="bg-cyan-900 p-2 ">
            <h3>{name}</h3>
            <small className="text-xs text-gray-400 my-2 block lg:text-sm">
              Offer ends 30th April @ Midnight
            </small>
            <p className="text-lime-300">&#8377; {price}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
