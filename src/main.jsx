import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./AppContext";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Page imports
import HomePage from "./pages/Home";
// import AboutPage from "./pages/About";
// import ContactPage from "./pages/Contact";
import WishlistPage from "./pages/Wishlist";
import Layout from "./components/Layout";
import ShopPage from "./pages/Shop";
// import { AllProducts } from "./components/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      // {
      //   path: "/about",
      //   element: <AboutPage />,
      // },
      // {
      //   path: "/contact",
      //   element: <ContactPage />,
      // },
      // {
      //   path: "/product/:id",
      //   element: <AllProducts />,
      // },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
