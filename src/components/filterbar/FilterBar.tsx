import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ThemeFilter from "./ThemeFilter";
import SourceFilter from "./SourceFilter";
import { Button } from "@headlessui/react";

interface FilterState {
  source: string[];
  theme: string[];
}

interface FilterBarProps {
  setFilters: (filters: FilterState) => void;
  filters: FilterState;
  setSearchParams: (params: Record<string, string[]>) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ setFilters, filters, setSearchParams }) => {
  const [searchParams] = useSearchParams();
  const [selectedSources, setSelectedSources] = useState<string[]>(searchParams.getAll("source") || []);
  const [selectedThemes, setSelectedThemes] = useState<string[]>(searchParams.getAll("theme") || []);

  useEffect(() => {
    setSelectedSources(searchParams.getAll("source") || []);
    setSelectedThemes(searchParams.getAll("theme") || []);
  }, [searchParams]);

  const applyFilters = () => {
    const newFilters = { source: selectedSources, theme: selectedThemes };
    setSearchParams(newFilters); // Update URL parameters
    setFilters(newFilters); // Pass updated filters to Library
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg ">
      <SourceFilter setSelectedSources={setSelectedSources} selectedSources={selectedSources} />
      <ThemeFilter setSelectedThemes={setSelectedThemes} selectedThemes={selectedThemes} />
      <Button
        onClick={applyFilters}
        className="w-full bg-darkceladon text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterBar;