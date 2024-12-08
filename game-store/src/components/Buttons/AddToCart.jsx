import React from "react";
import useCartStore from "../store/cartStore";
import { toast } from "react-toastify";

const AddToCart = ({ id, name, price, imgSrc }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  const item = {
    id,
    name,
    price,
    imgSrc,
  };

  const handleAddToCart = () => {
    if (cart.some((game) => game.id === id)) {
      toast.info("Item already in cart.");
    } else {
      addToCart(item);
      toast.success("Item added to cart.");
    }
  };

  return (
    <>
      <button
        className="bg-lime-600 px-3 py-1 w-[100%] text-gray-100 hover:bg-lime-500 lg:w-auto"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </>
  );
};

export default AddToCart;
