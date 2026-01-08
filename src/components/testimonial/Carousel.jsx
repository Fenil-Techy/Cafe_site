import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReviewCard } from "./ui/ReviewCard";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import reviewData from "./data/review.json"
export const Carousel = () => {
  return (
    <div className="relative w-full max-w-90 overflow-hidden "> 
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".button-nextt",
          prevEl: ".button-prev",
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        autoHeight={true}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper px-5! "
      >
        {reviewData.map((user) => (
          <SwiperSlide key={user.id} >
            <div className="pb-3 py-2 "> 
               <ReviewCard user={user} />
            </div>
          </SwiperSlide>
        ))}

        
        <button className="button-prev absolute left-0 bottom-0 z-50 cursor-pointer text-primary transition-all">
          <FaChevronCircleLeft size={30} />
        </button>
        <button className="button-nextt absolute right-0 bottom-0  z-50 cursor-pointer text-primary transition-all">
          <FaChevronCircleRight size={30} />
        </button>
      </Swiper>
    </div>
  );
};