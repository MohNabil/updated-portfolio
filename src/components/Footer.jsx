export default function Footer() {
  return (
    <footer className="bg-neutral-900 w-full py-8 px-8">
      <div className="text-center font-sans text-sm text-neutral-500">
        © {new Date().getFullYear()} Mohamed Nabil. Built with precision.
      </div>
    </footer>
  );
}
