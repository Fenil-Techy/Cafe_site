export const Hero=()=>{
    return(
       <section
  class="relative h-[90vh] md:h-[90vh] bg-cover bg-position-[60%] md:bg-center"
  style={{backgroundImage: "url('/hero/hero.webp')"}}
>
  <div class="absolute inset-0 bg-black/40"></div>

  <div class="relative z-10 flex gap-5 flex-col h-full items-center justify-center text-white">
    <h1 class="text-4xl md:text-6xl text-center font-heading font-semibold">
      The<br />Bungalow< br />Café
    </h1>
    <h1 className="font-light text-sm">Food. Comfort. Community.</h1>
    <div className="flex gap-2 mt-4 font-light">
    <button className="px-3 py-2 border">Explore Menu</button>
    <button className="px-8 py-1 border">Visit Us</button>
    </div>
  </div>
</section>

    )
}