import React from "react";

interface SourceChipsProps {
  source: string;
}

const SourceChips: React.FC<SourceChipsProps> = ({ source }) => {
  return (
    <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#5F9EA0] rounded-lg">
      {source}
    </span>
  );
};

export default SourceChips;