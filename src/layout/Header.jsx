import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
export const Header=()=>{

    const[isOpen,setIsOpen]=useState(false)

    return(
        
            <nav className="sticky top-0 z-50 flex justify-between items-center px-2 py-1 bg-primary border">
                <div className="pl-3">
                    <img src="/navbar/logo.webp" alt="" className="w-12 h-full" />
                </div>
                <button onClick={()=>setIsOpen(!isOpen)} className="pr-3"><CiMenuBurger className="text-white text-2xl" /></button>
                <div className={
                    `${isOpen?"translate-x-0":"translate-x-full"}
                    fixed top-0 right-0 w-64 h-full bg-primary shadow-2xl transform transition-transform duration-300 z-50
                    `}>
                <div className="flex pl-10">
                    <ul className="flex flex-col gap-4 w-full text-xl text-white">
                        <button onClick={()=>setIsOpen(!isOpen)} className="flex justify-end w-full text-4xl p-5">x</button>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Gallery</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                </div>
            </nav>
    
    )
}