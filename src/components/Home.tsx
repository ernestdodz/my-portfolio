import { motion } from "framer-motion";
import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Home = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-12 px-4 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-7xl font-bold mb-4">
            <span className="text-6xl font-bold mb-4">
              Nice to meet you! <br />
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 tracking-tight">
              I&apos;m Ernest
            </span>
          </h1>
          <h2 className="text-3xl font-bold text-gray-700">
            Crafting digital experiences with code
          </h2>
        </motion.div>

        <motion.p
          className="text-xl text-gray-700 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I'm a passionate{" "}
          <span className="font-semibold text-blue-600">
            fullstack developer
          </span>{" "}
          with a knack for{" "}
          <span className="font-semibold text-teal-500">backend solutions</span>
          . My mission is to build robust, scalable applications that make a
          difference.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
          >
            <FaFacebookF size={30} />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-800 transition-colors duration-300"
          >
            <FaLinkedinIn size={30} />
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-3 rounded-full font-bold hover:from-blue-700 hover:to-teal-500 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-bold hover:bg-gray-300 transition duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
