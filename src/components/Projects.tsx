import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "FlickTodo",
    description:
      "A full-stack web application for managing tasks. The project is built with Spring Boot and Supabase Auth and setup CI/CD with Github Actions.",
    tags: ["Spring Boot", "Supabase", "NextJS", "JWT", "Docker"],
    image: "/images/FlickTodo.png",
    link: "https://flick-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Manifest Me",
    description:
      "Full-stack Social Media like in which users can create an account and manifest their goals. The project is built with latest NextJS server actions and uses Drizzle as the ORM.",
    tags: ["NextJS", "Drizzle", "PostgreSQL", "CRUD"],
    image: "/images/ManifestMe.png",
    link: "https://manifest-me-liart.vercel.app/",
  },
  {
    id: 3,
    title: "FlickTMDB",
    description:
      "A movie and TV shows application that allows users to search for their favorite movies and TV shows. The project is built with TMDB API and uses NextJS as the framework.",
    tags: ["NextJS", "TMDB API", "TailwindCSS", "REST API"],
    image: "/images/FlickTMDB.png",
    link: "https://flicktmdb.vercel.app/",
  },
  {
    id: 4,
    title: "Product CRUD App",
    description:
      "A simple CRUD application that allows users to add, edit, delete and view products. The project is built with latest app router and server side data fetching and revalidation techniques",
    tags: ["NextJS", "MOCK API", "CRUD", "Mantine"],
    image: "/images/ProductMock.png",
    link: "https://product-mock.vercel.app/",
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-green-700">Featured Projects</span>
        </h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center bg-white rounded-lg shadow-lg overflow-hidden`}
            >
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
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
                <a
                  href={project.link}
                  className="mt-4 inline-block bg-green-700 text-white px-8 py-3 rounded-full font-bold hover:from-purple-700 hover:to-pink-600 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
