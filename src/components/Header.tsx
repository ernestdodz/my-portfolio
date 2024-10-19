import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b fixed w-full z-10"
    >
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center md:justify-center">
          <button
            className="md:hidden text-gray-600 hover:text-gray-800"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FiMenu size={24} />
          </button>
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-20 md:hidden"
      >
        <div className="p-4">
          <button
            className="text-gray-600 hover:text-gray-800 float-right"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FiX size={24} />
          </button>
          <ul className="mt-12 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-800 cursor-pointer block"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </motion.header>
  );
};

export default Header;
