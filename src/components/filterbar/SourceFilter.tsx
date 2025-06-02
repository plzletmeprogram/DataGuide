import { Button } from "@headlessui/react";
import { useGetCardInfo } from "../../hooks/useGetCardInfo";

interface SourceFilterProps {
  setSelectedSources: (sources: string[]) => void;
  selectedSources: string[];
}


interface CardInfoItem {
  attributes: {
    Source: string;
  };
}

const SourceFilter: React.FC<SourceFilterProps> = ({ setSelectedSources, selectedSources }) => {
  const { data, isLoading } = useGetCardInfo();
  if (isLoading) return <div>Loading sources...</div>;
  if (!data) return null;

  const sources = Array.from(
    new Set(
      (data as CardInfoItem[]).map((item) => item.attributes.Source)
    )
  );

  const toggleSource = (source: string) => {
    const newSources = selectedSources.includes(source)
      ? selectedSources.filter((s) => s !== source)
      : [...selectedSources, source];

    setSelectedSources(newSources); 
  };

  return (
    <div className="bg-white">
      <h3 className="font-bold mb-2 text-[#444] uppercase tracking-wider" style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700 }}>Filter by Source:</h3>
      <div className="max-h-80 p-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-2">
          {sources.map((source) => {
            const displaySource =
              source.toLowerCase().includes("department")
                ? source.replace(/department/gi, "Dept")
                : source;
            return (
              <Button
                key={source}
                onClick={() => toggleSource(source)}
                title={source}
                className={`px-4 py-1 text-xs border-2 border-[#444] font-bold shadow-[2px_2px_0_0_#aaa] rounded-none transition max-w-full overflow-hidden text-ellipsis whitespace-nowrap ${
                  selectedSources.includes(source)
                    ? "bg-[#444] text-white hover:bg-[#ff6700]"
                    : "bg-white text-[#444] hover:bg-[#ff6700] hover:text-white"
                }`}
                style={{ maxWidth: "100%" }}
              >
                {displaySource.length > 22 ? displaySource.slice(0, 20) + "…" : displaySource}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SourceFilter;