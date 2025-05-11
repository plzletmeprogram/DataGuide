import React from "react";

interface ThemeChipsProps {
  theme: string;
}

const ThemeChips: React.FC<ThemeChipsProps> = ({ theme }) => {
  return (
    <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#5F9EA0] rounded-lg">
      {theme}
    </span>
  );
};

export default ThemeChips;