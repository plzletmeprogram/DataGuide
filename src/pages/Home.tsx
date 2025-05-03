import TypingEffect from "../components/misc/TypingEffect";

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col space-y-4">
      <h1 className="text-4xl font-bold text-left font-family-sans text-darkceladon">Find Data About: <TypingEffect/></h1>
      <h2 className="text-2xl font-semibold text-left font-family-sans text-darkceladon"> A data catalog for urban design, community planning, and landscape architecture.</h2>
      <p className="text-lg text-left font-family-sans text-darkceladon"> The Urban Design Guide pools together nation-wide datasets about the build environment from trusted public and private sources. To view the data visit the 
      DataBoard.  </p>
    
    </div>
  );
};

export default Home;