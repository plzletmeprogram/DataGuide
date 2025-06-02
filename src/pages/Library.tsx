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
    <main className="flex w-full h-full pt-12 px-2 max-w-[2000px] mx-auto bg-white text-black">
      {/* FilterBar on the left */}
      <aside className="w-full max-w-xs min-w-[220px] pr-4 flex flex-col">
        <FilterBar setFilters={setFilters} filters={filters} setSearchParams={setSearchParams} />
      </aside>
      {/* Divider - only as tall as the content */}
      <div className="w-px bg-black self-stretch mx-2" />
      {/* DataBoard fills the rest */}
      <section className="flex-1 overflow-y-auto pb-12">
        <DataBoard filters={filters} />
      </section>
    </main>
  );
};

export default Library;