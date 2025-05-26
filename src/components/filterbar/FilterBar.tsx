import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ThemeFilter from "./ThemeFilter";
import SourceFilter from "./SourceFilter";
import { Button, Disclosure } from "@headlessui/react";

interface FilterState {
  source: string[];
  theme: string[];
}

interface FilterBarProps {
  setFilters: (filters: FilterState) => void;
  filters: FilterState;
  setSearchParams: (params: Record<string, string[]>) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ setFilters, setSearchParams }) => {
  const [searchParams] = useSearchParams();
  const [selectedSources, setSelectedSources] = useState<string[]>(searchParams.getAll("source") || []);
  const [selectedThemes, setSelectedThemes] = useState<string[]>(searchParams.getAll("theme") || []);

  useEffect(() => {
    setSelectedSources(searchParams.getAll("source") || []);
    setSelectedThemes(searchParams.getAll("theme") || []);
  }, [searchParams]);

  const applyFilters = () => {
    const newFilters = { source: selectedSources, theme: selectedThemes };
    setSearchParams(newFilters);
    setFilters(newFilters);
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg min-h-[300px] relative">
      
      {/* Source Filter Accordion */}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full text-left px-4 py-3 rounded-lg shadow-md bg-darkceladon text-white hover:bg-blue-600 transition">
              {open ? "Hide Sources" : "Filter by Source"}
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 p-2 rounded-lg bg-white min-h-[100px] max-h-[180px] overflow-y-auto">
              <SourceFilter setSelectedSources={setSelectedSources} selectedSources={selectedSources} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Theme Filter Accordion */}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full text-left px-4 py-3 rounded-lg shadow-md bg-darkceladon text-white hover:bg-blue-600 transition">
              {open ? "Hide Themes" : "Filter by Theme"}
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 p-2 rounded-lg bg-white min-h-[100px] max-h-[180px] overflow-y-auto">
              <ThemeFilter setSelectedThemes={setSelectedThemes} selectedThemes={selectedThemes} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Apply Filters Button - Ensured no crowding */}
      <div className="mt-auto">
        <Button onClick={applyFilters} className="w-full bg-darkceladon text-white px-4 py-3 rounded-md shadow-md hover:bg-blue-600 transition sticky bottom-6">
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;