

const logos = [
  { src: "/logos/epa_logo.png", alt: "EPA Logo" },
  { src: "/logos/hud_logo.png", alt: "HUD Logo" },
  { src: "/logos/census_logo.png", alt: "Census Logo" },
  { src: "/logos/fbi_logo.png", alt: "FBI Logo" },
  { src: "/logos/usgs_logo.png", alt: "USGS Logo" }
];

const SourcesBanner: React.FC = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={logo.src} alt={logo.alt} className="h-40 w-auto object-contain" />
          </div>
        ))}
      </div>
    );
  };
  
  export default SourcesBanner;