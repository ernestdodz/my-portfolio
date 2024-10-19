import { motion } from "framer-motion";
import {
  FaReact,
  FaSpider,
  FaDocker,
  FaLeaf,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaPaintBrush,
  FaCloud,
  FaUserFriends,
} from "react-icons/fa";
import {
  SiSvelte,
  SiTailwindcss,
  SiPostgresql,
  SiFigma,
  SiAdobephotoshop,
  SiSolid,
} from "react-icons/si";

const skillCategories = [
  {
    name: "Backend",
    icon: FaCode,
    color: "text-green-600",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "Spring Boot", icon: FaLeaf, color: "text-green-500" },
      { name: "Drizzle", icon: FaDatabase, color: "text-orange-500" },
      { name: "Web Scraping", icon: FaSpider, color: "text-gray-700" },
    ],
  },
  {
    name: "Frontend",
    icon: FaPaintBrush,
    color: "text-pink-500",
    skills: [
      { name: "React", icon: FaReact, color: "text-blue-500" },
      { name: "Svelte", icon: SiSvelte, color: "text-orange-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
      { name: "SolidJS", icon: SiSolid, color: "text-blue-600" },
    ],
  },
  {
    name: "Deployment",
    icon: FaCloud,
    color: "text-purple-500",
    skills: [
      { name: "Docker", icon: FaDocker, color: "text-blue-700" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      // Add more deployment skills here
    ],
  },
  {
    name: "User Experience",
    icon: FaUserFriends,
    color: "text-green-500",
    skills: [
      { name: "Figma", icon: SiFigma, color: "text-purple-600" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-800" },
    ],
  },
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-left">
          <span className="text-green-700">My Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <category.icon className={`text-3xl ${category.color} mr-2`} />
                <h3 className="text-2xl font-semibold">{category.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    <skill.icon className={`text-4xl ${skill.color} mb-2`} />
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
