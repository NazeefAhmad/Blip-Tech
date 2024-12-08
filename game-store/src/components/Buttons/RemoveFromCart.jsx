import React from "react";
import useCartStore from "../store/cartStore";
import { toast } from "react-toastify";

const RemoveFromCart = ({id}) => {

  const removeFromCart = useCartStore((state)=> state.removeFromCart);

  const handleRemoveFromCart = ()=>{
    removeFromCart(id);
    toast.success("Item removed from cart.");
  }

  return (
    <button
      className="hover:text-gray-400"
      onClick={handleRemoveFromCart}
    >
      Remove
    </button>
  );
};

export default RemoveFromCart;
