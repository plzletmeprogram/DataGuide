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

  const resetFilters = () => {
    setSelectedSources([]);
    setSelectedThemes([]);
    setSearchParams({});
    setFilters({ source: [], theme: [] });
  };

  return (
    <div className="flex flex-col space-y-2  pt-3 px-1 mt-4 bg-white min-h-[200px] ml-10">
      {/* Source Filter Accordion */}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full text-left px-3 py-2 border-2 border-[#444] bg-[#444] text-white font-bold shadow-[2px_2px_0_0_#aaa] rounded-none transition text-sm hover:bg-[#ff6700] flex items-center justify-between">
              <span>{open ? "Hide Sources" : "Filter by Source"}</span>
              <span className="ml-2 text-lg font-bold">{open ? "−" : "+"}</span>
            </Disclosure.Button>
            <Disclosure.Panel
              className={`mt-1 p-1 bg-white overflow-y-auto transition-all duration-200 ${
                open ? "min-h-[180px] max-h-[320px]" : "min-h-[60px] max-h-[120px]"
              } border-2 border-[#444] shadow-[2px_2px_0_0_#aaa] rounded-none`}
            >
              <SourceFilter setSelectedSources={setSelectedSources} selectedSources={selectedSources} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Theme Filter Accordion */}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full text-left px-3 py-2 border-2 border-[#444] bg-[#444] text-white font-bold shadow-[2px_2px_0_0_#aaa] rounded-none transition text-sm hover:bg-[#ff6700] flex items-center justify-between">
              <span>{open ? "Hide Themes" : "Filter by Theme"}</span>
              <span className="ml-2 text-lg font-bold">{open ? "−" : "+"}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="mt-1 p-1 bg-white min-h-[60px] max-h-[120px] overflow-y-auto border-2 border-[#444] shadow-[2px_2px_0_0_#aaa] rounded-none">
              <ThemeFilter setSelectedThemes={setSelectedThemes} selectedThemes={selectedThemes} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Apply Filters and Reset Filters Buttons */}
      <div className="mt-auto flex flex-col space-y-2">
        <Button
          onClick={applyFilters}
          className="w-full bg-[#444] text-white px-3 py-2 border-2 border-[#444] font-bold shadow-[2px_2px_0_0_#aaa] rounded-none hover:bg-[#ff6700] transition text-sm"
        >
          Apply Filters
        </Button>
        <Button
          onClick={resetFilters}
          className="w-full bg-white text-[#444] border-2 border-[#444] px-3 py-2 font-bold shadow-[2px_2px_0_0_#aaa] rounded-none hover:bg-[#ff6700] transition text-sm"
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;