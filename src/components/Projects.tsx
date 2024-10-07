import { motion } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    title: 'Project Alpha', 
    description: 'A robust backend system for high-volume data processing', 
    tags: ['Node.js', 'MongoDB', 'Docker']
  },
  { 
    id: 2, 
    title: 'Beta App', 
    description: 'Full-stack web application for project management', 
    tags: ['React', 'Express', 'PostgreSQL']
  },
  { 
    id: 3, 
    title: 'Gamma API', 
    description: 'RESTful API service for e-commerce platforms', 
    tags: ['Python', 'FastAPI', 'Redis']
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <a 
            href="#" 
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:from-purple-700 hover:to-pink-600 transition duration-300"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;