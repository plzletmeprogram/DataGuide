import TypingEffect from "../components/misc/TypingEffect";

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col space-y-4 h-fit pt-[60px] px-14">
      <h1
        className="text-4xl font-bold text-left text-black"
        style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700 }}
      >
        Find Data About: <TypingEffect />
      </h1>
      <h2
        className="text-2xl font-semibold text-left text-black"
        style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700 }}
      >
        A data catalog for urban design, community planning, and landscape
        architecture.
      </h2>
      <p
        className="text-lg text-left text-black"
        style={{ fontFamily: "'Public Sans', sans-serif" }}
      >
        The Urban Design Guide pools together nation-wide datasets about the
        build environment from trusted public and private sources.
      </p>
    </div>
  );
};

export default Home;