// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import Home from "./components/Home/Home.jsx";
// import Cart from "./components/Cart/Cart.jsx";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Categories from "./components/Categories/Categories.jsx";
// import CategoryPage from "./components/Categories/CategoryPage.jsx";
// import Error from "./components/Error/Error.jsx";
// import Product from "./components/Product/Product.jsx";
// import WishList from "./components/WishList/WishList.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "categories",
//         element: <Categories />,
//       },
//       {                           
//         path: "wishlist",
//         element: <WishList />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//       {
//         path: "product/:id",
//         element: <Product />,
//       },
//       {
//         path: "category/:category",
//         element: <CategoryPage />,
//       },
      
//       {
//         path: "*",
//         element: <Error />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//    <React.StrictMode>
//     <RouterProvider router={router} />
//    </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";
//import Checkout from "./components/Checkout/Checkout.jsx"; // Import Checkout
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Categories from "./components/Categories/Categories.jsx";
import CategoryPage from "./components/Categories/CategoryPage.jsx";
import Error from "./components/Error/Error.jsx";
import Product from "./components/Product/Product.jsx";
import WishList from "./components/WishList/WishList.jsx";
import Checkout from './components/checkout/Checkout.jsx';
//import Checkout from './checkout/Checkout.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "category/:category",
        element: <CategoryPage />,
      },
      {
        path: "*",  // Add the checkout route
        element: <Checkout />,
       
      },
      {
       // path: "*",
       // element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
