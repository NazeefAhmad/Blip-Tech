import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useCartStore from "./store/cartStore.js";
import useWishListStore from "./store/wishListStore";


const Header = () => {
  const [navWidth, setNavWidth] = useState("w-[0]");

  const handleNavbar = () => {
    setNavWidth(navWidth === "w-[0]" ? "w-[100%]" : "w-[0]");
  };

  const cart = useCartStore((state)=> state.cart);
  const wishList = useWishListStore((state)=> state.wishList);

  return (
    <header className="bg-[#0f172a]  shadow-md text-white relative ">
      <div className="mx-auto h-24 flex items-center gap-5 justify-between px-8 max-w-[1280px]">
        <NavLink to="/">
          <h1 className=" text-xl lg:text-3xl font-semibold">VAPOUR</h1>
        </NavLink>
        <div
          className="flex flex-col items-center justify-evenly border-2 border-solid w-[40px] h-[30px] rounded-lg cursor-pointer lg:hidden"
          onClick={handleNavbar}
        >
          <div className="w-[70%] h-[2px] bg-white"></div>
          <div className="w-[70%] h-[2px] bg-white"></div>
          <div className="w-[70%] h-[2px] bg-white"></div>
        </div>
        <nav
          className={`mt-2 ${navWidth} overflow-x-hidden bg-[#0f172a] absolute top-[90%] left-[0] z-20 transition-all duration-500 ease-out lg:static lg:w-auto`}
        >
          <ul className="flex flex-col text-sm lg:flex-row lg:text-base ">
            <li className="my-3 ml-3 uppercase font-semibold lg:mr-6 lg:my-0 lg:ml-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#3b82f6] underline underline-offset-4"
                      : "text-gray-300 "
                  } hover:text-[#3b82f6]`
                }
              >
                Home
              </NavLink>
            </li>
            <li className=" my-3 ml-3 uppercase font-semibold lg:mr-6 lg:my-0 lg:ml-0">
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#3b82f6] underline underline-offset-4"
                      : "text-gray-300 "
                  } hover:text-[#3b82f6]`
                }
              >
                Categories
              </NavLink>
            </li>
            <li className="my-3 ml-3 uppercase font-semibold lg:mr-6 lg:my-0 lg:ml-0">
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#3b82f6] underline underline-offset-4"
                      : "text-gray-300 "
                  } hover:text-[#3b82f6]`
                }
              >
                Wishlist {wishList.length !== 0 && `(${wishList.length})`}
              </NavLink>
            </li>
            <li className=" my-3 ml-3 uppercase font-semibold  lg:my-0 lg:ml-0">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#3b82f6] underline underline-offset-4"
                      : "text-gray-300 "
                  } hover:text-[#3b82f6]`
                }
              >
                Cart {cart.length !== 0 && `(${cart.length})`}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
