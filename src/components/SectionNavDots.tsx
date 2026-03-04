import { useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

interface Props {
  activeSection: string;
}

const SectionNavDots = ({ activeSection }: Props) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4">
      {sections.map((s) => {
        const isActive = activeSection === s.id;
        return (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            onMouseEnter={() => setHoveredId(s.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="flex items-center gap-3 group"
            aria-label={`Go to ${s.label}`}
          >
            {hoveredId === s.id && (
              <span className="text-xs uppercase tracking-wider text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                {s.label}
              </span>
            )}
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3 h-3 bg-primary'
                  : 'w-2 h-2 bg-muted-foreground/40 group-hover:bg-muted-foreground'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default SectionNavDots;
