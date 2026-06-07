export default function Footer() {
  return (
    <footer className="mt-16 mb-6 mx-auto w-full max-w-6xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="flex flex-col items-center justify-between gap-4 p-6 text-center md:flex-row">
        <span className="text-sm text-zinc-400">
          © 2026 Pianova. Desarrollado por Julian Torres.
        </span>

        <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-300">
          <a href="#" className="hover:text-cyan-400 transition">
            Inicio
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Acordes
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Escalas
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Teoría
          </a>
        </div>
      </div>
    </footer>
  );
}
