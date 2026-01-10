import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Children } from "react";
import { Menu } from "./pages/Menu";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { MainLayout } from "./layout/MainLayout";
import { OrderNow } from "./pages/OrderNow";
import { CartProvider } from "./shared/context/CartContext";

const App=()=>{

  const router=createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/menu",
          element:<Menu/>
        },
        {
          path:"/gallery",
          element:<Gallery/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/ordernow",
          element:<OrderNow/>
        }
      ]
    }
  ])

  return(
    <CartProvider>
    <RouterProvider router={router}>
      {Children}
    </RouterProvider>
    </CartProvider>
  )
}
export default App;
