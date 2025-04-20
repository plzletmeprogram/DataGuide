import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import DataCard from "../features/DataCard";
import data from "../data/data.json";

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col space-y-4">
      <h1 className="text-4xl font-bold text-left">Welcome to the Home Page!</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={6}
        slidesPerView={8} // Adjust for responsiveness
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <DataCard
              title={item.title}
              description={item.description}
              source={item.source}
              isSpatial={item.isSpatial}
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;