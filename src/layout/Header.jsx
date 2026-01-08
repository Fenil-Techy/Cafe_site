import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router-dom";
export const Header=()=>{

    const[isOpen,setIsOpen]=useState(false)

    return(
        
            <nav className="sticky top-0 z-50 flex justify-between items-center px-2 py-1 bg-primary border">
                <div className="pl-3">
                    <img src="/navbar/logo.webp" alt="" className="w-12 h-full" />
                </div>
                <div className="flex justify-center items-center gap-2">
                <button className="px-2 py-1 rounded-lg border border-white text-sm text-white">Order Now</button>
                <button onClick={()=>setIsOpen(!isOpen)} className="pr-3"><CiMenuBurger className="text-white text-2xl" /></button>
                </div>
                <div className={
                    `${isOpen?"translate-x-0":"translate-x-full"}
                    fixed top-0 right-0 w-64 h-full bg-primary shadow-2xl transform transition-transform duration-300 z-50
                    `}>
                <div className="flex pl-10">
                    <ul className="flex flex-col gap-4 w-full text-xl text-white">
                        <button onClick={()=>setIsOpen(!isOpen)} className="flex justify-end w-full text-4xl p-5">x</button>
                        <NavLink to="/">
                        <li onClick={()=>setIsOpen(!isOpen)}>Home</li>
                        </NavLink>

                        <NavLink to="/menu">
                        <li onClick={()=>setIsOpen(!isOpen)}>Menu</li>
                        </NavLink>

                        <NavLink to="/gallery">
                        <li onClick={()=>setIsOpen(!isOpen)}>Gallery</li>
                        </NavLink>

                        <NavLink to="/about">
                        <li onClick={()=>setIsOpen(!isOpen)}>About</li>
                        </NavLink>

                        <NavLink to="contact">
                        <li onClick={()=>setIsOpen(!isOpen)}>Contact</li>
                        </NavLink>
                    </ul>
                </div>
                </div>
            </nav>
    
    )
}