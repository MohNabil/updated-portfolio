export default function Hero() {
  const pills = [
    { id: 'about', label: 'About', href: '#about', icon: 'person', position: '-top-6 left-1/2 -translate-x-1/2' },
    { id: 'services', label: 'Services', href: '#services', icon: 'code', position: '-right-8 top-1/4' },
    { id: 'work', label: 'Work', href: '#work', icon: 'work', position: 'bottom-10 -left-8' },
    { id: 'contact', label: 'Contact', href: '#contact', icon: 'mail', position: '-bottom-6 right-8' },
  ];

  return (
    <section className="min-h-screen flex items-center pt-20 px-8 max-w-7xl mx-auto" id="home">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
        <div className="md:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label text-sm text-primary uppercase tracking-widest">Available for Hire</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-none">
            Hi I am <span className="text-primary">Mohamed Nabil</span>, Front End Developer
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Crafting high-performance, visually stunning digital experiences with structural precision and editorial flair.
          </p>
          <div className="flex gap-4">
            <a
              className="hero-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20"
              href="#work"
            >
              View Projects
            </a>
            <a
              className="border border-outline-variant px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all"
              href="#contact"
            >
              Let's Talk
            </a>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          {/* Mobile: portrait */}
          <div className="block md:hidden aspect-square rounded-2xl overflow-hidden bg-surface-container-low border-8 border-surface-container-high relative z-10">
            <img
              alt="Mohamed Nabil Portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="/images/my-photo.png"
              loading="eager"
            />
          </div>

          {/* Desktop: laptop with floating pills */}
          <div className="hidden md:block relative z-10">
            <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low border-8 border-surface-container-high">
              <img
                alt="Laptop displaying an analytics dashboard"
                className="w-full h-full object-cover"
                src="/images/laptop.png"
                loading="eager"
              />
            </div>
            {pills.map((pill) => (
              <a
                key={pill.id}
                href={pill.href}
                className={`absolute ${pill.position} z-20 inline-flex items-center gap-2.5 pl-2 pr-5 py-2.5 rounded-full bg-surface-container-high border border-outline-variant/20 shadow-2xl shadow-black/40 hover:scale-105 transition-transform duration-300`}
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <span className="material-symbols-outlined text-primary text-lg">
                    {pill.icon}
                  </span>
                </span>
                <span className="font-label text-xs uppercase tracking-widest text-neutral-200">
                  {pill.label}
                </span>
              </a>
            ))}
          </div>

          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
