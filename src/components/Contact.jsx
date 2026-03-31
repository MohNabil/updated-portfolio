import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section className="py-32 px-8" id="contact">
      <div className="max-w-4xl mx-auto bg-surface-container-low rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="font-label text-primary tracking-widest uppercase mb-6">Get in Touch</h2>
          <h3 className="text-5xl md:text-6xl font-headline font-extrabold mb-8 tracking-tighter">Let's build something <br/><span className="text-primary">extraordinary.</span></h3>
          <p className="text-xl text-on-surface-variant mb-12 max-w-xl mx-auto leading-relaxed">
            Currently open to new projects and interesting collaborations. Feel free to drop a message.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a className="hero-gradient text-on-primary px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/10" href="mailto:moh.nabil241978@gmail.com">
              <span className="material-symbols-outlined">mail</span>
              Email Me
            </a>
            <div className="flex gap-4 justify-center items-center">
              <a className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center hover:text-primary transition-colors border border-outline-variant/10" href="https://github.com/MohNabil" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub className="text-xl" />
              </a>
              <a className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center hover:text-primary transition-colors border border-outline-variant/10" href="https://linkedin.com/in/MohNabil-FEND" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedinIn className="text-xl" />
              </a>
              <a className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center hover:text-primary transition-colors border border-outline-variant/10" href="https://twitter.com/MohNabil421978" target="_blank" rel="noopener noreferrer" title="Twitter">
                <FaXTwitter className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
