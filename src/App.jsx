import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Children } from "react";
import { Menu } from "./pages/Menu";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { MainLayout } from "./layout/MainLayout";

const App=()=>{

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
      children:[
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
        }
      ]
    }
  ])

  return(
    <RouterProvider router={router}>
      <MainLayout/>
    </RouterProvider>
  )
}
export default App;
