import { motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </motion.div>
  );
}

export default App;
