import {React, useEffect,useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ThemeFilter from "../components/filterbar/ThemeFilter";
import DataCard from "../components/features/DataCard";
import TypingEffect from "../components/misc/TypingEffect";
import data from "../data/data.json";


const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col space-y-4">
      <h1 className="text-4xl font-bold text-left">Find Data About: <TypingEffect/></h1>
      <h2 className="text-2xl font-semibold text-left"> A data catalog for urban design, community planning, and landscape architecture.</h2>
      <p className="text-lg text-left"> The Urban Design Guide pools together nation-wide datasets about the build environment from trusted public and private sources. To view a dataset,
        simply click on a card below. Each card will contain a description of the dataset, its source, and an API endpoint. Endpoints are authorative and maintined directly by source agenices. </p>
      <ThemeFilter />
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