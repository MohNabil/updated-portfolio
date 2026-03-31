export default function Services() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-label text-primary tracking-widest uppercase mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">What I do</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-high p-10 rounded-xl flex flex-col justify-between group hover:bg-surface-container-highest transition-colors">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">language</span>
              <h4 className="text-2xl font-bold mb-4">Websites</h4>
              <p className="text-on-surface-variant leading-relaxed">Building websites with the latest technologies like React and Vue</p>
            </div>
            <div className="mt-12 flex gap-2">
              <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-label rounded-full">React</span>
              <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-label rounded-full">Vue</span>
            </div>
          </div>
          <div className="bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-transform shadow-2xl shadow-primary/10">
            <div>
              <span className="material-symbols-outlined text-on-primary text-4xl mb-6">smartphone</span>
              <h4 className="text-2xl font-bold mb-4">Mobile Applications</h4>
              <p className="text-on-primary/80 leading-relaxed">Building small mobile apps with react native</p>
            </div>
            <div className="mt-12 flex gap-2">
              <span className="px-3 py-1 bg-on-primary/10 text-on-primary text-xs font-label rounded-full">React Native</span>
            </div>
          </div>
          <div className="bg-surface-container-high p-10 rounded-xl flex flex-col justify-between group hover:bg-surface-container-highest transition-colors">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">dashboard_customize</span>
              <h4 className="text-2xl font-bold mb-4">Admin Dashboards</h4>
              <p className="text-on-surface-variant leading-relaxed">Building admin dashboards for mobile apps</p>
            </div>
            <div className="mt-12 flex gap-2">
              <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-label rounded-full">React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
