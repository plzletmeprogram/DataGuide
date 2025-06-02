import React, { useState } from "react";
import DataModal from "./DataModal";
import SourceChips from "../atoms/SourceChips";
import ThemeChips from "../atoms/ThemeChips";

interface DataCardProps {
  id: string;
  title: string;
  description: string;
  source: string;
  imgSource: string;
  themes: string[];
  endpoint: string;
  sourceUrl: string;
}

const DataCard: React.FC<DataCardProps> = ({ id, title, description, source, imgSource, themes, endpoint, sourceUrl }) => {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setTooltip("Copied!");
    setTimeout(() => setTooltip(null), 1500);
  };

  return (
    <div className="max-w-xs rounded-none overflow-hidden shadow-[4px_4px_0_0_#aaa] text-[#444] bg-[#ededed] border-4 border-[#444] p-3 m-2 flex flex-col space-y-2 h-full font-bold">
      {/* ID */}
      <div className="mb-1">
        <span
          className="inline-block px-2 py-0 border-2 border-[#444] rounded-none bg-white text-m text-[#444] font-bold"
          style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700 }}
        >
          ID:&nbsp;&nbsp;{id}
        </span>
      </div>
      <div className="relative">
        <img src={imgSource} alt="needs image" className="w-full h-20 object-cover rounded-none border-2 border-[#444]" />
      </div>

      {/* Title & Description */}
      <div className="flex-grow">
        <h2
          className="font-family-sans font-black text-base mb-1"
          style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 900 }}
        >
          {title}
        </h2>
        <h3 className="text-xs font-bold text-[#444]" style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700 }}>Description</h3>
        <p className="text-[#444] text-xs">{description}</p>
      </div>

      {/* Sources & Themes Section */}
      <div className="border-t-2 border-[#444] pt-1">
        <h3 className="text-xs font-bold text-[#444]" style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700 }}>Sources</h3>
        <SourceChips source={source} />
      </div>

      <div className="border-t-2 border-[#444] pt-1">
        <h3 className="text-xs font-bold text-[#444]" style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700 }}>Themes</h3>
        <div className="flex flex-wrap gap-0.5 mt-0.5">
          {themes.map((theme, index) => (
            <ThemeChips key={index} theme={theme} />
          ))}
        </div>
      </div>

      <div className="border-t-2 border-[#444] pt-1 flex flex-col space-y-1 mt-auto">
        <div className="relative group">
          <button
            className="px-2 py-1 bg-white text-[#444] text-xs font-bold border-2 border-[#444] shadow-[2px_2px_0_0_#aaa] rounded-none transition hover:bg-[#ff6700]"
            onClick={() => copyToClipboard(endpoint)}
            onMouseEnter={() => setTooltip(endpoint)}
            onMouseLeave={() => setTooltip(null)}
          >
            Copy Endpoint
          </button>
          {tooltip === endpoint && (
            <span className="absolute left-1 transform -translate-x-1 -top-15 bg-[#444] text-white text-[10px] rounded-none px-1 py-0.5 opacity-90 border-2 border-[#444] shadow-[2px_2px_0_0_#aaa] max-w-full w-max break-all whitespace-normal text-center">
              {endpoint}
            </span>
          )}
        </div>
        
        <div className="relative group">
          <button
            className="px-2 py-1  bg-white text-[#444] text-xs font-bold border-2 border-[#444] shadow-[2px_2px_0_0_#aaa] rounded-none transition hover:bg-[#ff6700]"
            onClick={() => copyToClipboard(sourceUrl)}
            onMouseEnter={() => setTooltip(sourceUrl)}
            onMouseLeave={() => setTooltip(null)}
          >
            Copy Source URL
          </button>
          {tooltip === sourceUrl && (
            <span className="absolute left-1 transform -translate-x-1 -top-10 bg-[#444] text-white text-[10px] rounded-none px-1 py-0.5 opacity-90 border-2 border-[#444] shadow-[2px_2px_0_0_#aaa] max-w-full w-max break-all whitespace-normal text-center">
              {sourceUrl}
            </span>
          )}
        </div>
      </div>
      
      {/* Data Modal Component */}
      <DataModal 
        title={title} 
        description={description} 
        source={source} 
        themes={themes} 
        endpoint={endpoint} 
        sourceUrl={sourceUrl} 
      />
    </div>
  );
};

export default DataCard;