import { useSearchParams } from "react-router-dom";
import SourceFilter from "../filterbar/SourceFilter"; // Add the filter component
import DataCard from "./DataCard";
import data from "../../data/data.json";

const DataBoard = () => {
  const [searchParams] = useSearchParams();
  const selectedSource = searchParams.get("source");

  // Filter data based on selected source
  const filteredData = selectedSource
    ? data.filter((item) => item.source === selectedSource)
    : data;

  return (
    <div className="p-4">
      <SourceFilter /> {/* Add the filter above the data cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {filteredData.map((item, index) => (
          <DataCard
            key={index}
            title={item.title}
            description={item.description}
            source={item.source}
            isSpatial={item.isSpatial}
            imgSource={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DataBoard;