import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-brandwheat  h-18 shadow-md flex-items-center py-5 p-2 mt-0 fixed w-full z-10 top-0" >
      <div className="flex justify-between items-center px-12 h-full">
        
        <div className="text-4xl text-center font-bold text-darkceladon font-family-logo">
          <Link to="/">Urban Design Data Guide</Link>
        </div>

        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="relative text-2xl font-family-sans font-semibold text-darkceladon cursor-pointer before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-darkceladon before:transition-all before:duration-200 hover:before:w-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/library"
              className="relative text-2xl font-family-sans font-semibold text-darkceladon cursor-pointer before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-darkceladon before:transition-all before:duration-200 hover:before:w-full"
            >
              Library
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative text-2xl font-family-sans font-semibold text-darkceladon cursor-pointer before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-darkceladon before:transition-all before:duration-200 hover:before:w-full"
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

