import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-2xl shadow-black/40">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">
        <div className="text-xl font-black tracking-tighter text-neutral-100">
          <span className="text-primary">M</span>N
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className="text-neutral-400 hover:text-neutral-100 transition-colors font-sans font-bold tracking-tight"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="hero-gradient text-on-primary px-6 py-2 rounded-md font-bold hover:scale-105 transition-transform duration-300 active:scale-95"
            href="#"
          >
            Resume
          </a>
        </div>
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-surface-container-highest border-t border-outline-variant/20 shadow-2xl flex flex-col items-center py-6 gap-2 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            className="text-neutral-300 hover:text-primary font-sans font-bold text-lg transition-colors tracking-wide w-11/12 text-center py-2"
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="hero-gradient text-on-primary px-8 py-3 mt-2 rounded-md font-bold w-11/12 text-center"
          href="#"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
