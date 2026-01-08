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
    <div className="w-full h-full">
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
        className="w-full h-full"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.img}
              alt=""
              className="w-full h-full  object-cover rounded-4xl "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
