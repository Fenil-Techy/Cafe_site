import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Carousel() {
  const images = [
    { id: 1, img: "/gallery/interior4.webp" },
    { id: 2, img: "/gallery/interior5.webp" },
    { id: 3, img: "/gallery/interior6.webp" },
    { id: 4, img: "/gallery/interior9.webp" },
  ];

  return (
    <div className="w-[90%] md:max-w-3xl lg:max-w-4xl mx-auto overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoHeight={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full rounded-4xl"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
        
            <div className="aspect-square md:aspect-video w-full overflow-hidden rounded-4xl">
               <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}