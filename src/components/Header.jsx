import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'contact', label: 'Contact', href: '#contact' },
    { id: 'resume', label: 'Resume', href: '#' },
  ];

  const getDesktopClass = (id) => {
    if (activeSection === id) {
      return "hero-gradient text-on-primary px-6 py-2 rounded-md font-bold hover:scale-105 transition-transform duration-300 active:scale-95 ml-2";
    }
    return "text-neutral-400 hover:text-neutral-100 transition-colors font-sans font-bold tracking-tight border border-transparent px-4 py-2 ml-2";
  };

  const getMobileClass = (id) => {
    if (activeSection === id) {
      return "hero-gradient text-on-primary px-8 py-3 mt-2 rounded-md font-bold w-11/12 text-center";
    }
    return "text-neutral-300 hover:text-primary font-sans font-bold text-lg transition-colors tracking-wide w-11/12 text-center py-2";
  };

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-2xl shadow-black/40">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">
        <div className="text-xl font-black tracking-tighter text-neutral-100">
         <span className="text-primary">M</span>N 
        </div>
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              className={getDesktopClass(link.id)} 
              href={link.href}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
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
            className={getMobileClass(link.id)} 
            href={link.href}
            onClick={() => handleNavClick(link.id)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
