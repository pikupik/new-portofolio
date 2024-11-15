import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white relative w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center sm:items-end justify-center h-16">
          <div className="flex items-center">
            <div className="hidden sm:items-end md:block">
              <div className="justify-center space-x-4">
                <Link
                  to="home"
                  smooth={true}
                  duration={100}
                  className="px-3 py-2 rounded-md text-4xl font-medium hover:bg-gray-700 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={100}
                  className="px-3 py-2 rounded-md text-4xl font-medium hover:bg-gray-700 transition duration-300"
                >
                  About Me
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={100}
                  className="px-3 py-2 rounded-md text-4xl font-medium hover:bg-gray-700 transition duration-300"
                >
                  Projects
                </Link>
                <Link
                  to="touch"
                  smooth={true}
                  duration={100}
                  className="px-3 py-2 rounded-md text-4xl font-medium hover:bg-gray-700 transition duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300"
            >
              {isOpen ? (
                <span className="text-2xl">&times;</span>
              ) : (
                <span className="text-2xl">&#9776;</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="home"
              smooth={true}
              duration={100}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={100}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={100}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="touch"
              smooth={true}
              duration={100}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300"
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
