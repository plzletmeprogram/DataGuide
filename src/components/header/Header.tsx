import { Link } from "react-router-dom";

// Add Bagel Fat One font import in your index.css if not already present:
// @import url('https://fonts.googleapis.com/css2?family=Bagel+Fat+One&display=swap');

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white h-12 shadow-md flex-items-center py-5 p-2 mt-0 fixed w-full z-10 top-0 border-b border-black">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 h-full">
        
        <div
          className="text-center font-black text-black uppercase tracking-tight xs:text-xs sm:text-xs md:text-lg lg:text-2xl xl:text-3xl"
          style={{ fontFamily: "'Bagel Fat One', cursive" }}
        >
          <Link to="/">Urban Design Data Guide</Link>
        </div>

        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="relative sm:text-xs md:text-md lg:text-xl xl:text-2xl font-sans font-bold text-black capitalize cursor-pointer before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-200 hover:before:w-full"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/library"
              className="relative sm:text-xs md:text-md lg:text-xl xl:text-2xl font-sans font-bold text-black capitalize cursor-pointer before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-200 hover:before:w-full"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
            >
              Library
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative sm:text-xs md:text-md lg:text-xl xl:text-2xl font-sans font-bold text-black capitalize cursor-pointer before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-200 hover:before:w-full"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;