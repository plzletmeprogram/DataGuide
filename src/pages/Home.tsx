import React, { useState } from "react";
import DataCard from "../features/DataCard";
import DataModal from "../features/DataModal";
import data from "../data/data.json";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Set to true for testing
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen space-y-4">
      <h1 className="text-4xl font-bold">Welcome to the Home Page!</h1>
      <div className="flex flex-wrap justify-center items-center">
        {data.map((item, index) => (
          <DataCard
            key={index}
            title={item.title}
            description={item.description}
            source={item.source}
            isSpatial={item.isSpatial}
            openModal={openModal}
          />
        ))}
      </div>
      <DataModal
      
      />
    </div>
  );
};

export default Home;
