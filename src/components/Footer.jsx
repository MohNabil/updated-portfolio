export default function Footer() {
  return (
    <footer className="bg-neutral-900 w-full py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto border-t border-neutral-800/50 pt-8">
        <div className="font-sans text-sm text-neutral-500 mb-6 md:mb-0">
          &copy; 2024 Digital Architect. Built with precision.
        </div>
        <div className="flex gap-8">
          <a className="font-sans text-sm text-neutral-500 hover:text-cyan-400 transition-colors" href="https://github.com/MohNabil" target="_blank" rel="noopener noreferrer">Github</a>
          <a className="font-sans text-sm text-neutral-500 hover:text-cyan-400 transition-colors" href="https://linkedin.com/in/MohNabil-FEND" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="font-sans text-sm text-neutral-500 hover:text-cyan-400 transition-colors" href="https://twitter.com/MohNabil421978" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
