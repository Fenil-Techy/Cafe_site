import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-2 py-1 bg-primary border">

      <div className="pl-3">
        <img src="/navbar/logo.webp" alt="Logo" className="w-12 h-full" />
      </div>

    
      <div className="flex justify-center items-center gap-2">
        <NavLink to="/ordernow">
          <button className="px-2 py-1 rounded-lg border border-white text-sm text-white">
            Order Now
          </button>
        </NavLink>
        <button onClick={() => setIsOpen(true)} className="pr-3">
          <CiMenuBurger className="text-white text-2xl" />
        </button>
      </div>

      <div className="fixed inset-0 z-40 pointer-events-none">
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

    
        <div
          className={`absolute top-0 right-0 w-64 h-full bg-primary shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex pl-10">
            <ul className="flex flex-col gap-4 w-full text-xl text-white">
              <button
                onClick={() => setIsOpen(false)}
                className="flex justify-end w-full text-4xl p-5"
              >
                ×
              </button>

              <NavLink to="/" onClick={() => setIsOpen(false)}>
                <li>Home</li>
              </NavLink>

              <NavLink to="/menu" onClick={() => setIsOpen(false)}>
                <li>Menu</li>
              </NavLink>

              <NavLink to="/gallery" onClick={() => setIsOpen(false)}>
                <li>Gallery</li>
              </NavLink>

              <NavLink to="/about" onClick={() => setIsOpen(false)}>
                <li>About</li>
              </NavLink>

              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
