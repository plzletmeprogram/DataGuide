import DataCard from "./DataCard";
import ThemeFilter from "../filterbar/ThemeFilter";
import data from "../../data/data.json";

const DataBoard = () => {
    return (
      <div
      >
     
        <ThemeFilter />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <DataCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    );
  };
  
  export default DataBoard;
  