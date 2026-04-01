export default function Work() {
  return (
    <section className="py-32 px-8 bg-surface-container-lowest" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-label text-primary tracking-widest uppercase mb-4">
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold">
              My Work
            </h3>
            <p className="text-xl text-on-surface-variant mt-4">
              Samples of my work
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer md:col-span-2">
            <div className="aspect-[21/9] w-full bg-surface-container">
              <img
                alt="Admin Dashboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                src="/images/fix-image.png"
              />
            </div>
            <div className="p-8">
              <span className="text-primary font-label text-sm uppercase tracking-widest mb-2">
                Web Application
              </span>
              <h4 className="text-2xl font-headline font-extrabold mb-4">
                Admin Dashboard for mobile app
              </h4>
              <p className="text-on-surface-variant max-w-lg mb-6">
                Admin Dashboard for mobile app with React.
              </p>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary">
                  terminal
                </span>
                <span className="font-label text-sm text-on-surface-variant">
                  React
                </span>
              </div>
            </div>
          </div>

          <div className="group bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
            <div className="aspect-video relative bg-surface-container">
              <img
                alt="Whatsapp Clone"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                src="/images/whatsapp.png"
              />
            </div>
            <div className="p-8">
              <span className="text-primary font-label text-sm uppercase tracking-widest mb-2">
                Full Stack
              </span>
              <h4 className="text-2xl font-bold mb-4">Whatsapp Clone</h4>
              <p className="text-on-surface-variant mb-6">
                Whatsapp clone with Vue on the frontend and Express and Mongoose
                on the backend
              </p>
            </div>
          </div>

          <div className="group bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
            <div className="aspect-video relative bg-surface-container">
              <img
                alt="Mobile App"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                src="/images/mobile.png"
              />
            </div>
            <div className="p-8">
              <span className="text-primary font-label text-sm uppercase tracking-widest mb-2">
                iOS / Android
              </span>
              <h4 className="text-2xl font-bold mb-4">Mobile App</h4>
              <p className="text-on-surface-variant mb-6">
                Mobile app with react native
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
