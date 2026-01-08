import { NavLink } from "react-router-dom"

export const Hero=()=>{
    return(
       <section
  className="relative h-[90vh] md:h-[90vh] bg-cover bg-position-[60%] md:bg-center"
  style={{backgroundImage: "url('/hero/hero.webp')"}}
>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 flex gap-5 flex-col h-full items-center justify-center text-white">
    <h1 className="text-5xl md:text-6xl text-center font-heading font-semibold">
      The<br />Bungalow< br />Cafe
    </h1>
    <h1 className="font-light text-sm italic">Food. Comfort. Community.</h1>
    <div className="flex gap-2 mt-4 font-light">
      <NavLink to="/menu">
    <button className="px-3 py-2 border">Explore Menu</button>
      </NavLink>
    <a href="#visit">
    <button className="px-8 py-2 border">Visit Us</button>
    </a>
    </div>
  </div>
</section>

    )
}