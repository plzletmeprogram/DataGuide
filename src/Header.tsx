import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-300 w-full fixed top-3 left-0 z-50 h-12 shadow-md">
      <div className="flex justify-between items-center px-4 h-full">
        {/* Logo */}
        <div className="text-lg font-bold bg-white text-black border-2 border-black px-3 py-1 rounded-full font-family-logo">
          <Link to="/">Urban Design Data Guide</Link>
          <p className="font-family-sans text-xs mt-1 text-center">"Just another government data wrapper"</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="px-3 py-1 bg-red-600 text-white text-sm rounded-full hover:rounded-md hover:bg-red-400 hover:text-black transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/library"
              className="px-3 py-1 bg-red-600 text-white text-sm rounded-full hover:rounded-md hover:bg-red-400 hover:text-black transition-all duration-200"
            >
              Library
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-3 py-1 bg-red-600 text-white text-sm rounded-full hover:rounded-md hover:bg-red-400 hover:text-black transition-all duration-200"
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
