import { useState, useEffect } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useSearchParams, useLocation } from "react-router-dom";
import data from "../../data/data.json"; // Ensure correct path

// Extract unique sources dynamically
const sources = Array.from(new Set(data.map((item) => item.source))).map((source, index) => ({
  id: index + 1,
  name: source
}));

const SourceFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Check for an existing source param
  const sourceParam = searchParams.get("source");
  const [selectedSource, setSelectedSource] = useState(
    sourceParam ? sources.find((s) => s.name === sourceParam) : null
  );

  // Ensure URL resets when a user **reloads or visits** the page without filtering
  useEffect(() => {
    if (!sourceParam) {
      setSearchParams({});
    }
  }, [location.pathname]); // Runs only when the user changes pages

  // Update search params only when the user **actively selects** a source
  useEffect(() => {
    if (selectedSource) {
      setSearchParams({ source: selectedSource.name });
    }
  }, [selectedSource]);

  return (
    <Listbox value={selectedSource} onChange={setSelectedSource}>
      <ListboxButton className="border px-4 py-2 rounded-lg bg-white shadow-md">
        {selectedSource ? selectedSource.name : "Select a source"}
      </ListboxButton>
      <ListboxOptions anchor="bottom" className="bg-white shadow-lg border rounded-lg p-2">
        {sources.map((source) => (
          <ListboxOption key={source.id} value={source} className="cursor-pointer hover:bg-blue-100 p-2">
            {source.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default SourceFilter;