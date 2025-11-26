import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AllProducts/AllProducts";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout, 
    children: [
      {
        index: true,
        Component: Home,
      }, 
      {
        path: "allproducts",
        Component: AllProducts, 
      }
    ],
  },
]);
