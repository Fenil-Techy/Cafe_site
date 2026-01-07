import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const MainLayout=()=>{
    return(
        <div>
            <Header/>
            <main className="max-w-7xl mx-auto">
            <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}