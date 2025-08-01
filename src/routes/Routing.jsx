import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/AboutPage";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact-Us/Contact";
import ContactUsPage from "../pages/Contact-Us/Contact";
import ProductsCategoryPage from "../pages/Products/Product-category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/contact", element: <Contact /> },
      { path: "/product-category", element: <ProductsCategoryPage /> },
    ],
  },

  //   {
  //     path: "/admin",
  //     element: <AdminLayout />,
  //     children: [
  //       { index: true, element: <Dashboard /> },
  //       { path: "products", element: <AdminProducts /> },
  //       { path: "blogs", element: <AdminBlogs /> },
  //       {
  //         path: "addBlog",
  //         element: <AddBlog />,
  //       },
  //       {
  //         path: "editBlog",
  //         element: <EditBlog />,
  //       },
  //       { path: "*", element: <h2>Admin 404 page!</h2> },
  //     ],
  //   },

  {
    path: "*",
    element: <h2>404 page!</h2>,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
