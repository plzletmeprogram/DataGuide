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
    <div className="flex items-center justify-center h-screen p-4"> {/* Ensures vertical & horizontal centering */}
      <div className="bg-white shadow-lg rounded-lg border-2 border-[#5F9EA0] w-[90vw] h-150 max-h-1300 p-4 flex flex-col"> {/* Ensures it's fully visible */}
        <div className="flex w-full h-full">
          {/* Sidebar */}
          <div className="w-[25%] h-full pr-4 border-r-2 border-[#5F9EA0]">
            <FilterBar setFilters={setFilters} filters={filters} setSearchParams={setSearchParams} />
          </div>

          {/* Content Area */}
          <div className="w-[80%] overflow-auto h-full">
            <DataBoard filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;