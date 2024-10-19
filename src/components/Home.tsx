import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { ReactTyped } from "react-typed";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center text-green-700 border border-green-700 rounded-md hover:bg-green-700 hover:text-white transition-colors duration-300"
  >
    {icon}
  </a>
);

export default function Home() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center min-h-[calc(100vh-10rem)] px-4 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="space-y-4">
            <p className="text-2xl text-gray-600 flex items-center justify-center gap-4">
              <span>Hello there,</span>
              <h1 className="text-4xl font-bold">I'm Ernest</h1>
            </p>

            <h2 className="text-6xl font-bold text-green-700">
              <ReactTyped
                strings={[
                  "Full-Stack Developer",
                  "Web Developer",
                  "Software Engineer",
                ]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </h2>
            <motion.p
              className="text-2xl text-gray-600"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                type: "spring",
                stiffness: 120,
              }}
            >
              Passionated in creation.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4 mt-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <SocialLink
            href="https://github.com/ernestdodz"
            icon={<FaGithub size={20} />}
          />
          <SocialLink
            href="https://www.facebook.com/ernestdodz"
            icon={<FaFacebookF size={20} />}
          />
          <SocialLink
            href="https://www.linkedin.com/in/ernestdodz/"
            icon={<FaLinkedinIn size={20} />}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
