import React from "react";
import useWishListStore from "../store/wishListStore";
import { toast } from "react-toastify";

const AddToWishList = ({ id, name, price, imgSrc }) => {
  const addToWishList = useWishListStore((state) => state.addToWishList);
  const wishList = useWishListStore((state) => state.wishList);

  const item = {
    id: id,
    name: name,
    price: price,
    imgSrc: imgSrc,
  };

  const handleAddToWishList = () => {
    if (wishList.some((game) => game.id === id)) {
      toast.info("Item already in Wish List.");
    } else {
      addToWishList(item);
      toast.success("Item added to Wish List.");
    }
  };

  return (
    <button
      className="bg-sky-900 px-3 py-1 w-[100%]  hover:bg-sky-500 lg:w-auto"
      onClick={handleAddToWishList}
    >
      Add to Wishlist
    </button>
  );
};

export default AddToWishList;
