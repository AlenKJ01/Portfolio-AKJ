import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
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
        {/* Backdrop */}
        <div className="absolute inset-0" style={{ background: 'rgba(5,7,14,0.85)', backdropFilter: 'blur(12px)' }} />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden max-h-[88vh] overflow-y-auto"
          style={{
            background: 'rgba(12,14,22,0.97)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(47,214,176,0.06)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(210,220,230,0.6)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(47,214,176,0.15)';
              (e.currentTarget as HTMLElement).style.color = '#2fd6b0';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
              (e.currentTarget as HTMLElement).style.color = 'rgba(210,220,230,0.6)';
            }}
          >
            <X size={15} />
          </button>

          {/* Project image — 520×176 native ratio preserved */}
          <div className="w-full overflow-hidden relative" style={{ height: '220px' }}>
            {project.image ? (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(47,214,176,0.08), rgba(56,189,248,0.05))' }}>
                <span className="text-muted-foreground text-xs tracking-widest uppercase">{project.title}</span>
              </div>
            )}
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(12,14,22,1) 0%, rgba(12,14,22,0.2) 60%, transparent 100%)' }}
            />
          </div>

          {/* Content */}
          <div className="px-8 pb-8 -mt-2 relative">
            <h3 className="font-display text-2xl font-bold text-foreground mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
              {project.title}
            </h3>
            <p className="text-xs tracking-wider uppercase mb-6" style={{ color: '#2fd6b0', opacity: 0.75 }}>
              {project.subtitle}
            </p>

            {/* Description */}
            <div className="space-y-3 mb-7">
              {project.description.map((d, i) => (
                <div key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: '#2fd6b0', opacity: 0.6 }} />
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(210,220,230,0.7)', fontFamily: 'DM Sans, sans-serif' }}>
                    {d}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.tech.split(' · ').map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full border border-border bg-secondary/50 text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub link */}
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200"
                style={{
                  border: '1px solid rgba(47,214,176,0.35)',
                  background: 'rgba(47,214,176,0.07)',
                  color: '#2fd6b0',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(47,214,176,0.15)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(47,214,176,0.6)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(47,214,176,0.07)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(47,214,176,0.35)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <Github size={13} /> View on GitHub
                <ExternalLink size={11} style={{ opacity: 0.7 }} />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
