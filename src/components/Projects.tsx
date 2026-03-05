import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '@/data/projects';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const additional = projects.filter((p) => !p.featured);
  const displayed = showAll ? projects : featured;

  return (
    <section id="projects" className="snap-section min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground mt-2 mb-12">
            A collection of AI, ML, and data-driven systems I've built.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {displayed.map((project, i) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              onClick={() => setSelectedProject(project)}
              className="text-left group rounded-xl border border-border/50 bg-card/50 p-1 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-full h-44 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <span className="text-muted-foreground/50 text-sm font-display">{project.title}</span>
              </div>
              <div className="px-3 pb-4">
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{project.subtitle}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {additional.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
            >
              {showAll ? 'Show Less Projects' : 'Show More Projects'}
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
