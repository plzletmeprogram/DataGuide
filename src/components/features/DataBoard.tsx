import { Navigation, Pagination } from "swiper/modules";
import DataCard from "./DataCard";
import ThemeFilter from "../filterbar/ThemeFilter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../../data/data.json";

const DataBoard = () => {
    return (
      <div
      >
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
  
  export default DataBoard;
  