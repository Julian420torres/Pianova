export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🎹</span>

          <h1 className="text-xl font-bold">PianoChord</h1>
        </div>

        <nav className="hidden md:flex gap-8 text-zinc-300">
          <a href="#">Inicio</a>
          <a href="#">Acordes</a>
          <a href="#">Escalas</a>
          <a href="#">Teoría</a>
        </nav>
      </div>
    </header>
  );
}
