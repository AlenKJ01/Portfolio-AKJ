import { useState, useEffect } from 'react';

const sections = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 transition-all duration-300">
      <div
        className={`w-full max-w-7xl px-6 h-16 flex items-center justify-between
        rounded-full transition-all duration-300
        ${
          scrolled
            ? 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
            : 'bg-transparent'
        }`}
      >
      
        <div className="flex items-center gap-6">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display font-bold text-xl tracking-wider text-foreground hover:opacity-80 transition-opacity"
          >
            AKJ<span className="text-primary">.</span>
          </button>

        </div>

        {/* Center Tagline */}
        <div className="hidden md:flex flex-1 justify-center">
          <span
            className="text-xs font-medium tracking-[0.35em]"
            style={{
              color: "#36c1a3",
              textShadow: "0 0 6px rgba(0, 0, 0, 0.6), 0 0 14px rgba(0, 0, 0, 0.35)"
            }}
          >
            AI • MACHINE LEARNING • DATA SCIENCE
          </span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <li key={s}>
              <button
                onClick={() => scrollTo(s)}
                className={`nav-link text-xs uppercase tracking-[0.2em] font-medium pb-1 transition-colors ${
                  activeSection === s.toLowerCase()
                    ? 'text-foreground active'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;