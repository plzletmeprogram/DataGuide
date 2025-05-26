import { Button } from "@headlessui/react";
import useGetData, { DataItem } from "../../hooks/GetData";

interface SourceFilterProps {
  setSelectedSources: (sources: string[]) => void;
  selectedSources: string[];
}

const SourceFilter: React.FC<SourceFilterProps> = ({ setSelectedSources, selectedSources }) => {
  const data: DataItem[] = useGetData(); 
  const sources = Array.from(new Set(data.map((item) => item.attributes.Source))); 

  const toggleSource = (source: string) => {
    const newSources = selectedSources.includes(source)
      ? selectedSources.filter((s) => s !== source)
      : [...selectedSources, source];

    setSelectedSources(newSources); 
  };

  return (
    <div className="bg-white rounded-lg ">
      <h3 className="font-semibold mb-2">Filter by Source:</h3>

      <div className="max-h-80  p-2 rounded-lg">
        {/* Single-column layout on smaller screens, two columns on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {sources.map((source) => (
            <Button
              key={source}
              onClick={() => toggleSource(source)}
              className={`px-4 py-2 text-xs rounded-lg transition ${
                selectedSources.includes(source) ? "bg-darkceladon text-white" : "bg-white border border-darkceladon text-darkceladon"
              }`}
            >
              {source}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourceFilter;