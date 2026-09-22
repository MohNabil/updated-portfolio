export default function Work() {
  return (
    <section className="py-32 px-8 bg-surface-container-lowest" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
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
          {/* Featured — Admin Dashboard */}
          <div className="group relative bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
            <div className="aspect-video w-full bg-surface-container">
              <img
                alt="Admin Dashboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                src="/images/fix-image.png"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent flex flex-col justify-end p-12">
              <span className="text-primary font-label text-sm uppercase tracking-widest mb-2">
                Web Application
              </span>
              <h4 className="text-4xl font-headline font-extrabold mb-4">
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

          {/* TVTC Government Platform — CSS visual */}
          <div className="group bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 hero-gradient opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 material-symbols-outlined text-primary text-5xl opacity-40 group-hover:scale-110 transition-transform duration-700">
                account_balance
              </span>
            </div>
            <div className="p-8">
              <span className="text-primary font-label text-sm uppercase tracking-widest mb-2">
                Tamkeen Tech · Amasi Tech
              </span>
              <h4 className="text-2xl font-bold mb-4">
                TVTC Government Platform
              </h4>
              <p className="text-on-surface-variant mb-6">
                Government platform spanning 5+ apps in an Nx monorepo.
                Reduced code duplication by 30% and improved page-load
                performance by 25% — serving tens of thousands of daily users.
              </p>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary">
                  terminal
                </span>
                <span className="font-label text-sm text-on-surface-variant">
                  React, Nx Monorepo, REST
                </span>
              </div>
            </div>
          </div>

          {/* Mobile App — untouched */}
          <div className="group bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
            <div className="aspect-video relative bg-surface-container">
              <img
                alt="Mobile App"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                src="/images/mobile.png"
                loading="lazy"
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

          {/* Qiwa Platform — CSS visual */}
          <div className="group bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-surface-container to-primary/5" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 material-symbols-outlined text-primary text-5xl opacity-40 group-hover:scale-110 transition-transform duration-700">
                groups
              </span>
            </div>
            <div className="p-8">
              <span className="text-primary font-label text-sm uppercase tracking-widest mb-2">
                Takamol Holding · Q Agency
              </span>
              <h4 className="text-2xl font-bold mb-4">Qiwa Platform</h4>
              <p className="text-on-surface-variant mb-6">
                Labour-market platform for KSA. Built a reusable React design
                system and translated Figma specs into accessible,
                production-ready interfaces.
              </p>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary">
                  terminal
                </span>
                <span className="font-label text-sm text-on-surface-variant">
                  React, Design System
                </span>
              </div>
            </div>
          </div>

          {/* Real-time Stock Dashboard — CSS visual */}
          <div className="group bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-surface-container to-primary/10" />
              <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 material-symbols-outlined text-primary text-5xl opacity-40 group-hover:scale-110 transition-transform duration-700">
                trending_up
              </span>
            </div>
            <div className="p-8">
              <span className="text-primary font-label text-sm uppercase tracking-widest mb-2">
                Tritex
              </span>
              <h4 className="text-2xl font-bold mb-4">
                Real-time Stock Dashboard
              </h4>
              <p className="text-on-surface-variant mb-6">
                Live stock dashboard with React and SignalR WebSocket.
                Maintains 60 fps under continuous data streams.
              </p>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary">
                  terminal
                </span>
                <span className="font-label text-sm text-on-surface-variant">
                  React, WebSocket, SignalR
                </span>
              </div>
            </div>
          </div>

          {/* SAIP — CSS visual */}
          <div className="group bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-transparent to-primary/5" />
              <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-primary/10 rounded-full blur-2xl" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 material-symbols-outlined text-primary text-5xl opacity-40 group-hover:scale-110 transition-transform duration-700">
                speed
              </span>
            </div>
            <div className="p-8">
              <span className="text-primary font-label text-sm uppercase tracking-widest mb-2">
                Algoriza
              </span>
              <h4 className="text-2xl font-bold mb-4">SAIP</h4>
              <p className="text-on-surface-variant mb-6">
                Next.js + REST integration. Delivered measurable Lighthouse
                performance and SEO gains.
              </p>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary">
                  terminal
                </span>
                <span className="font-label text-sm text-on-surface-variant">
                  Next.js, REST, SEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
