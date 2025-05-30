

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import NotFound from "../pages/notfound";
import Layout from "../Components/layout";
import { Details } from "../pages/Details";



export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: '/carrinho',
        element: <Cart />
      },

      {
        path:'/details/:id',
        element:<Details/>
      }


    ]
  },

  {
    path: '/*',
    element: <NotFound />
  }
])