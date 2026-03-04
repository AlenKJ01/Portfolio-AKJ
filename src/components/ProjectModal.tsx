import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-2xl rounded-xl border border-border bg-card p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>

          <div className="w-full h-48 rounded-lg bg-secondary mb-6 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Project Preview</span>
          </div>

          <h3 className="font-display text-2xl font-bold mb-1">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-6">{project.subtitle}</p>

          <div className="space-y-3 mb-6">
            {project.description.map((d, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-sm">• {d}</p>
            ))}
          </div>

          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.split(' · ').map((t) => (
                <span key={t} className="px-3 py-1 text-xs rounded-full border border-border bg-secondary/50 text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
            >
              <ExternalLink size={14} /> View on GitHub
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
