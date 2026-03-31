export default function About() {
  return (
    <section className="py-32 px-8 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden">
              <img 
                alt="My Photo" 
                className="w-full h-full object-cover opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-1000" 
                src="/images/photo2.jpeg"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-surface-container-highest p-8 rounded-xl shadow-2xl max-w-xs border border-outline-variant/10">
              <p className="font-label text-primary text-3xl font-bold">100%</p>
              <p className="text-sm text-on-surface-variant mt-2">Precision driven from my Civil Engineering background applied to every line of code.</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-label text-primary tracking-widest uppercase">My Journey</h2>
            <h3 className="text-5xl font-headline font-bold leading-tight">From Blueprints to <br/><span className="text-primary-container">Building the Web</span></h3>
            <p className="text-xl text-on-surface-variant leading-relaxed">
                My story isn't your typical tech path. As a former <span className="font-bold text-on-surface">Civil Engineer</span>, I spent years designing physical structures. I realized that the same logic, structural integrity, and attention to detail could be translated into the digital world.
            </p>
            <p className="text-xl text-on-surface-variant/80 italic">
                "I don't just write code; I architect systems that are stable, scalable, and aesthetically balanced."
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-surface-container-lowest rounded-lg border-l-4 border-primary">
                <p className="font-bold text-on-surface">Precision</p>
                <p className="text-sm text-on-surface-variant">Engineering mindset</p>
              </div>
              <div className="p-4 bg-surface-container-lowest rounded-lg border-l-4 border-primary">
                <p className="font-bold text-on-surface">Design</p>
                <p className="text-sm text-on-surface-variant">Editorial aesthetics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
