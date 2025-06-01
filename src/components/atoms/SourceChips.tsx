import React from "react";

interface SourceChipsProps {
  source: string;
}

const SourceChips: React.FC<SourceChipsProps> = ({ source }) => {
  return (
    <span className="inline-block px-3 py-1 text-sm font-bold text-[#444] bg-white border-2 border-[#444] shadow-[2px_2px_0_0_#aaa] rounded-none">
      {source}
    </span>
  );
};

export default SourceChips;