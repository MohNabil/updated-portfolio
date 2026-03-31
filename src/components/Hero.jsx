export default function Hero() {
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
            <button className="hero-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20" onClick={() => document.getElementById('work').scrollIntoView()}>
              View Projects
            </button>
            <button className="border border-outline-variant px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all" onClick={() => document.getElementById('contact').scrollIntoView()}>
              Let's Talk
            </button>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low border-8 border-surface-container-high relative z-10">
            <img 
              alt="Mohamed Nabil Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="/images/my-photo.png"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
