import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b"
    >
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="#home" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-600 hover:text-gray-800">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-600 hover:text-gray-800">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
