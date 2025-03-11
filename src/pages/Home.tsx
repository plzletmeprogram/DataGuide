import React, { useState } from "react";
import DataCard from "../features/DataCard";
import data from "../data/data.json";

const Home: React.FC = () => {

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
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
