import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
      <div className="container-custom">
        <nav className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="text-2xl font-bold text-gradient"
            onClick={closeMenu}
          >
            SV
          </Link>

          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex absolute md:relative top-full md:top-0 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent border-t md:border-0 border-gray-200 dark:border-gray-700 flex-col md:flex-row items-center gap-8 p-6 md:p-0`}
          >
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "text-primary-500"
                  : "text-gray-600 dark:text-gray-300"
              } hover:text-primary-500 transition-colors duration-300 font-medium`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about")
                  ? "text-primary-500"
                  : "text-gray-600 dark:text-gray-300"
              } hover:text-primary-500 transition-colors duration-300 font-medium`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`${
                isActive("/projects")
                  ? "text-primary-500"
                  : "text-gray-600 dark:text-gray-300"
              } hover:text-primary-500 transition-colors duration-300 font-medium`}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact")
                  ? "text-primary-500"
                  : "text-gray-600 dark:text-gray-300"
              } hover:text-primary-500 transition-colors duration-300 font-medium`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-600" />
              )}
            </button>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
