import React, { useState } from "react";
import DataModal from "./DataModal";
import SourceChips from "../atoms/SourceChips";
import ThemeChips from "../atoms/ThemeChips";

interface DataCardProps {
  title: string;
  description: string;
  source: string;
  isSpatial: boolean;
  imgSource: string;
  themes: string[];
  endpoint: string;
  sourceUrl: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, description, source, imgSource, themes, endpoint, sourceUrl }) => {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setTooltip("Copied!"); // Briefly show feedback
    setTimeout(() => setTooltip(null), 1500); // Remove tooltip after 1.5s
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-md text-darkceladon bg-brandwheat p-4 m-2 flex flex-col space-y-4">
      {/* Image Section */}
      <div className="relative">
        <img src={imgSource} alt="Data Visualization" className="w-full h-36 object-cover rounded-md" />
      </div>

      {/* Title & Description */}
      <div>
        <h2 className="font-family-sans font-medium text-lg mb-2">{title}</h2>
        <h3 className="text-sm font-semibold text-darkceladon">Description</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>

      {/* Sources Section */}
      <div className="border-t pt-2">
        <h3 className="text-sm font-semibold text-darkceladon">Sources</h3>
        <SourceChips source={source} />
      </div>

      {/* Themes Section */}
      <div className="border-t pt-2">
        <h3 className="text-sm font-semibold text-darkceladon">Themes</h3>
        <div className="flex flex-wrap gap-1 mt-1">
          {themes.map((theme, index) => (
            <ThemeChips key={index} theme={theme} />
          ))}
        </div>
      </div>

      {/* Copy URL Buttons with Tooltip */}
      <div className="border-t pt-2 flex flex-col space-y-2">
        <div className="relative group">
          <button
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition"
            onClick={() => copyToClipboard(endpoint)}
            onMouseEnter={() => setTooltip(endpoint)}
            onMouseLeave={() => setTooltip(null)}
          >
            Copy Endpoint
          </button>
          {tooltip === endpoint && (
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-90">
              {endpoint}
            </span>
          )}
        </div>
        <div className="relative group">
          <button
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition"
            onClick={() => copyToClipboard(sourceUrl)}
            onMouseEnter={() => setTooltip(sourceUrl)}
            onMouseLeave={() => setTooltip(null)}
          >
            Copy Source URL
          </button>
          {tooltip === sourceUrl && (
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-90">
              {sourceUrl}
            </span>
          )}
        </div>
      </div>
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