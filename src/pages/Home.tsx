import {React, useEffect,useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ThemeFilter from "../components/filterbar/ThemeFilter";
import DataCard from "../components/features/DataCard";
import data from "../data/data.json";


const wordlist: string[] = [
  "Wetlands, Land Use, and Land Cover",
  "Transportation",
  "Housing",
  "Public Health",
  "Demographics",
  "Climate Change",
  "Urban Heat Island Effect",
  "Air Quality",
  "Water Quality",
  "Biodiversity",
  "Green Infrastructure",
  "Public Spaces",
  "Poverty",
  "Pollution"
];


const Home: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    const word = wordlist[currentWordIndex];

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordlist.length);
        }
      }, 50); 
    } else {
      typingTimeout = setTimeout(() => {
        if (displayText.length < word.length) {
          setDisplayText((prev) => prev + word[displayText.length]);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 100); 
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting]);

  return (
    <div className="relative flex flex-col space-y-4">
      <h1 className="text-4xl font-bold text-left">Find Data About: {displayText}</h1>
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