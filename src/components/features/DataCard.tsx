import React, { useState } from "react";
import DataModal from "./DataModal";
import SourceChips from "../atoms/SourceChips";
import ThemeChips from "../atoms/ThemeChips";

interface DataCardProps {
  title: string;
  description: string;
  source: string;
  imgSource: string;
  themes: string[];
  endpoint: string;
  sourceUrl: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, description, source, imgSource, themes, endpoint, sourceUrl }) => {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setTooltip("Copied!");
    setTimeout(() => setTooltip(null), 1500);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-sm text-darkceladon bg-brandwheat p-2 m-1 flex flex-col space-y-2 h-full">
      {/* Image Section */}
      <div className="relative">
        <img src={imgSource} alt="Data Visualization" className="w-full h-20 object-cover rounded-md" /> {/* Smaller image */}
      </div>

      {/* Title & Description */}
      <div className="flex-grow"> {/* Pushes button to bottom */}
        <h2 className="font-family-sans font-medium text-sm mb-1">{title}</h2>
        <h3 className="text-xs font-semibold text-darkceladon">Description</h3>
        <p className="text-gray-700 text-xs">{description}</p>
      </div>

      {/* Sources & Themes Section */}
      <div className="border-t pt-1">
        <h3 className="text-xs font-semibold text-darkceladon">Sources</h3>
        <SourceChips source={source} />
      </div>

      <div className="border-t pt-1"> 
        <h3 className="text-xs font-semibold text-darkceladon">Themes</h3>
        <div className="flex flex-wrap gap-0.5 mt-0.5">
          {themes.map((theme, index) => (
            <ThemeChips key={index} theme={theme} />
          ))}
        </div>
      </div>

      {/* Button Section - Always Anchored at Bottom */}
      <div className="border-t pt-1 flex flex-col space-y-1 mt-auto"> {/* Added `mt-auto` to push this down */}
        <div className="relative group">
          <button
            className="px-2 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600 transition"
            onClick={() => copyToClipboard(endpoint)}
            onMouseEnter={() => setTooltip(endpoint)}
            onMouseLeave={() => setTooltip(null)}
          >
            Copy Endpoint
          </button>
          {tooltip === endpoint && (
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-gray-700 text-white text-xs rounded-md px-1 py-0.5 opacity-90">
              {endpoint}
            </span>
          )}
        </div>
        
        <div className="relative group">
          <button
            className="px-2 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600 transition"
            onClick={() => copyToClipboard(sourceUrl)}
            onMouseEnter={() => setTooltip(sourceUrl)}
            onMouseLeave={() => setTooltip(null)}
          >
            Copy Source URL
          </button>
          {tooltip === sourceUrl && (
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-gray-700 text-white text-xs rounded-md px-1 py-0.5 opacity-90">
              {sourceUrl}
            </span>
          )}
        </div>

        {/* "See Details" Button - Always at Bottom */}
       
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