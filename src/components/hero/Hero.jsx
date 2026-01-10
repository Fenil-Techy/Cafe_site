import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export const Hero = () => {
  // 1. Define separate images for Mobile and Desktop
  const bgImages = [

    {
      desktop:"/hero/hero.webp",
      mobile:"/gallery/interior1.webp"
    },
    {
      desktop:"/hero/hero3.webp",
      mobile:"/gallery/interior7.webp"
    },
    {

      desktop:"/hero/hero4.webp",
      mobile:"/gallery/interior8.webp"
    },
    {

      desktop:"/gallery/interior4.webp",
      mobile:"/gallery/interior10.webp"
    },
    {

      desktop:"/gallery/interior5.webp",
      mobile:"/gallery/interior11.webp"
    },
    {

      desktop:"/hero/hero2.webp", 
      mobile:"/gallery/interior12.webp"
    },
    {

      desktop:"/gallery/interior6.webp",
      mobile:"/gallery/interior13.webp"
    },

  ];

  // 2. State to track if we are on mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative h-[90vh] lg:h-[95vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          {bgImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center"
                // 3. Dynamically switch the URL based on screen size
                style={{ 
                  backgroundImage: `url('${isMobile ? img.mobile : img.desktop}')` 
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute inset-0 bg-black/60 z-1"></div>

      {/* Content - Exactly as you had it */}
      <div className="relative z-10 flex gap-5 lg:gap-8 xl:gap-10 flex-col h-full items-center justify-center text-white">
        <h1 className="text-5xl md:text-6xl text-center font-heading font-semibold lg:leading-18 xl:text-7xl xl:leading-20">
          The<br />Bungalow<br />Cafe
        </h1>
        <h1 className="font-light text-sm italic lg:text-base">Food. Comfort. Community.</h1>
        <div className="flex gap-2 mt-4 font-light lg:gap-5">
          <NavLink to="/menu">
            <button className="px-3 py-2 border xl:px-8 xl:py-4 xl:text-base md:transition-transform md:duration-300 md:hover:-translate-y-2 md:hover:bg-primary">
              Explore Menu
            </button>
          </NavLink>
          <a href="#visit">
            <button className="px-8 py-2 border xl:px-13 xl:py-4 xl:text-base md:transition-transform md:duration-300 md:hover:-translate-y-2 md:hover:bg-primary">
              Visit Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};