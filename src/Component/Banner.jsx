import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
const Banner = () => {
  return (
    <section className="h-[48vh]  flex items-center gap-5">
      <div className="h-full w-3/5 border-2 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full w-full"
        >
          <SwiperSlide>
            <img
              src="https://cdn.mos.cms.futurecdn.net/x6qyvd7Y4fP8opWaVKTQW8.jpg"
              alt=""
              className="h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.mos.cms.futurecdn.net/x6qyvd7Y4fP8opWaVKTQW8.jpg"
              alt=""
              className="h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.mos.cms.futurecdn.net/x6qyvd7Y4fP8opWaVKTQW8.jpg"
              alt=""
              className="h-full w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex-1 flex flex-col gap-5 ">
        <div className="h-[22.8vh] border-2 bg-[url('https://www.cnet.com/a/img/resize/30cdf249130d7478f1049162f13f762fc48961d2/hub/2024/01/24/73947584-67eb-4e99-b66d-207b4c0e1eda/samsung-galaxy-s24-ultra-1887.jpg?auto=webp&fit=crop&height=360&width=640')] bg-cover bg-center"></div>
        <div className="h-[22.8vh] border-2 bg-[url('https://i.ytimg.com/vi/fjRaA-8CV4A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBi-tqJFIhdMM5Sx1dT4nOqb50zKw')] bg-cover bg-center"></div>
        
      </div>
    </section>
  );
};

export default Banner;
