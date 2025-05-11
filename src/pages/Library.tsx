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

  // Sync filters with URL whenever it changes
  useEffect(() => {
    const newFilters = {
      source: searchParams.getAll("source") || [],
      theme: searchParams.getAll("theme") || [],
    };
    setFilters(newFilters);
  }, [searchParams]);

  return (
    <div className="relative flex flex-col h-screen overflow-hidden p-4">
      <div className="bg-white shadow-lg rounded-lg border-2 border-[#5F9EA0] h-[80vh] flex-grow-0 mx-auto w-[90vw] p-4">
        <div className="flex h-full relative">
          <div className="w-[20%] h-full pr-4 border-r-2 border-[#5F9EA0] absolute left-0">
            <FilterBar setFilters={setFilters} filters={filters} setSearchParams={setSearchParams} />
          </div>
          <div className="w-[80%] overflow-auto h-full ml-[20%]">
            <DataBoard filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;