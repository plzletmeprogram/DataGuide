import { Button } from "@headlessui/react";
import { useGetCardInfo } from "../../hooks/useGetCardInfo";

interface ThemeFilterProps {
  setSelectedThemes: (themes: string[]) => void;
  selectedThemes: string[];
}


interface CardInfoItem {
  attributes: {
    Theme?: string[];

  };
}

const ThemeFilter: React.FC<ThemeFilterProps> = ({ setSelectedThemes, selectedThemes }) => {
  const { data, isLoading } = useGetCardInfo();
  if (isLoading) return <div>Loading themes...</div>;
  if (!data) return null;

  const themes = Array.from(
    new Set(
      (data as CardInfoItem[]).flatMap((item) => item.attributes.Theme || [])
    )
  );

  const toggleTheme = (theme: string) => {
    const newThemes = selectedThemes.includes(theme)
      ? selectedThemes.filter((t) => t !== theme)
      : [...selectedThemes, theme];

    setSelectedThemes(newThemes); 
  };

  return (
    <div className="bg-white p-2">
      <h3 className="font-bold mb-2 text-[#444] uppercase tracking-wider" style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700 }}>Filter by Theme:</h3>
      <div className="grid grid-cols-2 gap-2">
        {themes.map((theme) => (
          <Button
            key={theme}
            onClick={() => toggleTheme(theme)}
            className={`px-4 py-2 text-sm border-2 border-[#444] font-bold shadow-[2px_2px_0_0_#aaa] rounded-none transition ${
              selectedThemes.includes(theme)
                ? "bg-[#444] text-white hover:bg-[#ff6700]"
                : "bg-white text-[#444] hover:bg-[#ff6700] hover:text-white"
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