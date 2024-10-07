import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Get in Touch
          </span>
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-xl text-gray-700 mb-6">
            I'm always open to new opportunities and collaborations. Whether you
            have a project in mind or just want to say hello, feel free to reach
            out!
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.05 }}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-center hover:from-purple-700 hover:to-pink-600 transition duration-300"
            >
              Send an Email
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-blue-700 transition duration-300"
            >
              Connect on LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
