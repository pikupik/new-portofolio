import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white relative w-full z-10 shadow-md">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="p-3 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-300 transition duration-300"
            >
              {isOpen ? (
                <span className="text-3xl">&times;</span>
              ) : (
                <span className="text-3xl">&#9776;</span>
              )}
            </button>
          </div>

          {/* Centered Navbar Links on Desktop/Laptop */}
          <div className="hidden md:flex items-center justify-center w-full space-x-8">
            <Link
              to="home"
              smooth={true}
              duration={300}
              className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-gray-800 hover:text-yellow-300 transition duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={300}
              className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-gray-800 hover:text-yellow-300 transition duration-300 cursor-pointer"
            >
              About Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={300}
              className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-gray-800 hover:text-yellow-300 transition duration-300 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="touch"
              smooth={true}
              duration={300}
              className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-gray-800 hover:text-yellow-300 transition duration-300 cursor-pointer"
            >
              Get In Touch
            </Link>
          </div>

          {/* Invisible spacer for Desktop to center-align links */}
          <div className="md:hidden"></div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-gray-900 border-t border-gray-700">
            <Link
              to="home"
              smooth={true}
              duration={300}
              className="block px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-yellow-300 transition duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={300}
              className="block px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-yellow-300 transition duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={300}
              className="block px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-yellow-300 transition duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="touch"
              smooth={true}
              duration={300}
              className="block px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-yellow-300 transition duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
