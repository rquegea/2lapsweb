export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-white/70">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-600">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <p className="justify-self-start">© {year} 2laps by T&T</p>
          <div className="justify-self-center">
            <img src="/features/tytlogo1.png" alt="T&T" className="h-10 md:h-12 w-auto" />
          </div>
          <nav className="flex gap-5 justify-self-end">
            <button type="button" className="hover:text-zinc-900">Privacidad</button>
            <button type="button" className="hover:text-zinc-900">Términos</button>
            <a href="#contact" className="hover:text-zinc-900">Contacto</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}



