import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DataBoard from "../components/features/DataBoard";
import FilterBar from "../components/filterbar/FilterBar";

interface Filters {
  source: string[];
  theme: string[];
}

const Library: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<Filters>({
    source: searchParams.getAll("source") || [],
    theme: searchParams.getAll("theme") || [],
  });

  useEffect(() => {
    const newFilters = {
      source: searchParams.getAll("source") || [],
      theme: searchParams.getAll("theme") || [],
    };
    setFilters(newFilters);
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center mt-[60px] sm:mt-[50px] md:mt-[40px] lg:mt-[40px] min-h-[calc(100vh-80px)]">
     
      <div className="bg-white shadow-lg rounded-lg border-2 border-[#5F9EA0] max-w-[85vw] w-[90vw] max-h-[calc(100vh-120px)] p-2 sm:p-3 md:p-4 lg:p-5 mx-auto overflow-hidden flex flex-col">
        <div className="flex w-full h-full">
        
          <div className="w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%] h-full pr-2 sm:pr-4 border-r-2 border-[#5F9EA0] sticky top-0 self-start">
            <FilterBar setFilters={setFilters} filters={filters} setSearchParams={setSearchParams} />
          </div>
          <div className="w-[60%] sm:w-[65%] md:w-[70%] lg:w-[75%] overflow-auto max-h-[calc(100vh-180px)]">
            <DataBoard filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Library;