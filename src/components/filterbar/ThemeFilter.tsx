import { Button } from "@headlessui/react";
import data from "../../data/data.json";

const themes = Array.from(new Set(data.flatMap((item) => item.theme)));

interface ThemeFilterProps {
  setSelectedThemes: (themes: string[]) => void;
  selectedThemes: string[];
}

const ThemeFilter: React.FC<ThemeFilterProps> = ({ setSelectedThemes, selectedThemes }) => {
  const toggleTheme = (theme: string) => {
    const newThemes = selectedThemes.includes(theme)
      ? selectedThemes.filter((t) => t !== theme)
      : [...selectedThemes, theme];

    setSelectedThemes(newThemes); // Update selected themes
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="font-semibold mb-2">Filter by Theme:</h3>
      <div className="grid grid-cols-2 gap-2">
        {themes.map((theme) => (
          <Button
            key={theme}
            onClick={() => toggleTheme(theme)}
            className={`px-4 py-2 text-sm rounded-lg transition ${
              selectedThemes.includes(theme) ? "bg-darkceladon text-white" : "bg-white border border-darkceladon text-darkceladon"
            }`}
          >
            {theme}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ThemeFilter;