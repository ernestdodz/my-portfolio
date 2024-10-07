import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGraphql,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Python", icon: FaPython, color: "text-yellow-500" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "SQL", icon: FaDatabase, color: "text-indigo-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-700" },
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            My Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <skill.icon className={`text-4xl ${skill.color} mb-2`} />
              <span className="text-sm font-medium text-gray-700">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
