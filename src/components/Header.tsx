import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b"
    >
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center md:justify-center">
          <button
            className="md:hidden text-gray-600 hover:text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 absolute md:relative left-0 right-0 top-full md:top-auto bg-white md:bg-transparent p-4 md:p-0`}
          >
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800 block cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800 block cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800 block cursor-pointer"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
