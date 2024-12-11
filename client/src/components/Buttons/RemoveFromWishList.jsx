import React from "react";
import useWishListStore from "../store/wishListStore";
import { toast } from "react-toastify";

const RemoveFromWishList = ({ id }) => {

  const removeFromWishList = useWishListStore((state)=> state.removeFromWishList);

  const handleRemoveFromWishList = ()=>{
    removeFromWishList(id);
    toast.success("Item removed from Wish List.");
  }

  return (
    <button
      className="hover:text-gray-400"
      onClick={handleRemoveFromWishList}
    >
      Remove
    </button>
  );
};

export default RemoveFromWishList;
