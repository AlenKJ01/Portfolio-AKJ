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
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-bold text-xl tracking-wider text-foreground hover:opacity-80 transition-opacity"
        >
          AKJ<span className="text-primary">.</span>
        </button>

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
      </nav>
    </header>
  );
};

export default Navbar;
