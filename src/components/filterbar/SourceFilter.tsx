import { Button } from "@headlessui/react";
import data from "../../data/data.json";

const sources = Array.from(new Set(data.map((item) => item.source)));

interface SourceFilterProps {
  setSelectedSources: (sources: string[]) => void;
  selectedSources: string[];
}

const SourceFilter: React.FC<SourceFilterProps> = ({ setSelectedSources, selectedSources }) => {
  const toggleSource = (source: string) => {
    const newSources = selectedSources.includes(source)
      ? selectedSources.filter((s) => s !== source)
      : [...selectedSources, source];

    setSelectedSources(newSources); // Update selected sources
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="font-semibold mb-2">Filter by Source:</h3>
      <div className="grid grid-cols-2 gap-2">
        {sources.map((source) => (
          <Button
            key={source}
            onClick={() => toggleSource(source)}
            className={`px-4 py-2 text-sm rounded-lg transition ${
              selectedSources.includes(source) ? "bg-darkceladon text-white" : "bg-white border border-darkceladon text-darkceladon"
            }`}
          >
            {source}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SourceFilter;