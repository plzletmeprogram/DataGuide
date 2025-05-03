import React, { useState, useEffect } from "react";

const wordlist: string[] = [
  "Wetlands, Land Use, and Land Cover",
  "Transportation",
  "Housing",
  "Public Health",
  "Demographics",
  "Climate Change",
  "Urban Heat Island Effect",
  "Air Quality",
  "Water Quality",
  "Biodiversity",
  "Green Infrastructure",
  "Public Spaces",
  "Poverty",
  "Pollution"
];

const TypingEffect: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    const word = wordlist[currentWordIndex];

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordlist.length);
        }
      }, 50); // Adjust backspacing speed here
    } else {
      typingTimeout = setTimeout(() => {
        if (displayText.length < word.length) {
          setDisplayText((prev) => prev + word[displayText.length]);
        } else {
          setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        }
      }, 120); // Adjust typing speed here
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting]);

  return <span>{displayText}</span>;
};

export default TypingEffect;