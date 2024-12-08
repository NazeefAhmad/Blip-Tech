import React, { useState } from "react";
import WishItem from "./WishItem";
import useWishListStore from "../store/wishListStore";
import { v4 as uuidv4 } from "uuid";

const WishList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const wishList = useWishListStore((state) => state.wishList);

  return (
    <main className="max-w-[1280px] mx-auto px-4 py-8 bg-[#1f2937] text-white min-h-[100vh]">
      <section className="lg:px-20">
        <h2 className="text-2xl font-bold mb-4">Your WishList</h2>
        <div className="">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search by name"
            className="w-[100%] outline-none px-3 py-2 rounded-md bg-gray-900"
            onChange={handleChange}
          />
        </div>
        <hr className="my-4 border-none bg-gray-600 h-0.5" />
        <div>
          {wishList.length === 0 ? (
            <p>Your wish list is empty</p>
          ) : (
            wishList.map((wishItem) => {
              if (
                !searchQuery ||
                wishItem.name
                  .toLowerCase()
                  .startsWith(searchQuery.toLowerCase())
              ) {
                return (
                  <WishItem
                    key={wishItem.id}
                    id={wishItem.id}
                    name={wishItem.name}
                    price={wishItem.price}
                    imgSrc={wishItem.imgSrc}
                  />
                );
              }
              return null;
            })
          )}
        </div>
      </section>
    </main>
  );
};

export default WishList;
