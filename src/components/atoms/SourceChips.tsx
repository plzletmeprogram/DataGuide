import React from "react";

interface SourceChipsProps {
  source: string;
}

const SourceChips: React.FC<SourceChipsProps> = ({ source }) => {
  return (
    <span className="inline-block px-3 py-1 text-xs font-bold text-[#444] bg-white border-1 border-[#444] rounded-2xl">
      {source}
    </span>
  );
};

export default SourceChips;