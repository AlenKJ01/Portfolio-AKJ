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
    <section id="projects" className="snap-section min-h-screen py-24 relative">

      {/* Background accent */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(47,214,176,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          {/* <p className="section-num mb-3">02 — Work</p> */}
          <h2
            className="heading-line font-display text-3xl md:text-4xl font-extrabold"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Featured Projects
          </h2>
          <p
            className="text-muted-foreground mt-4 text-sm max-w-lg"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            A collection of AI, ML, and data-driven systems built from concept to deployment.
          </p>
        </motion.div>

        {/* NEW LAYOUT (your fancy one) */}
        <div className="space-y-20">
          {displayed.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col md:flex-row items-center gap-10"
            >

              {/* LEFT: IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[420px] shrink-0"
              >
                <div className="relative aspect-[520/176] rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* RIGHT: TEXT */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-5 max-w-xl leading-relaxed">
                  {project.subtitle}
                </p>

                {/* TECH */}
                {Array.isArray(project.tech) ? (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full text-white backdrop-blur-md shadow-sm"
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.split(' · ').map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full text-white backdrop-blur-md shadow-sm"
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-primary font-medium">
                    View Project
                  </span>
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>

        {/* Show more */}
        {additional.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group px-7 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(210,220,230,0.6)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  'rgba(47,214,176,0.4)';
                (e.currentTarget as HTMLElement).style.color = '#2fd6b0';
                (e.currentTarget as HTMLElement).style.background =
                  'rgba(47,214,176,0.06)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  'rgba(255,255,255,0.12)';
                (e.currentTarget as HTMLElement).style.color =
                  'rgba(210,220,230,0.6)';
                (e.currentTarget as HTMLElement).style.background =
                  'transparent';
              }}
            >
              {showAll ? '↑ Show Less' : `Show More Projects`}
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;