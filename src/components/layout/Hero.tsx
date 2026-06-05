export default function Hero() {
  return (
    <section className="py-12 md:py-16 text-center">
      <h1
        className="
          text-6xl
          md:text-8xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          via-green-400
          to-blue-500
          bg-clip-text
          text-transparent
        "
      >
        Pianova
      </h1>

      <p className="mt-6 text-xl text-zinc-300">
        Visualiza acordes de piano y guitarra al instante.
      </p>

      <p className="mt-2 text-zinc-500">Aprende música de forma interactiva.</p>

      <div className="mt-8 flex justify-center gap-4">
        <button
          className="
            rounded-xl
            bg-cyan-500
            px-6
            py-3
            font-semibold
            hover:bg-cyan-400
            transition
          "
        >
          Comenzar
        </button>

        <button
          className="
            rounded-xl
            border
            border-white/10
            px-6
            py-3
            font-semibold
            hover:bg-white/5
            transition
          "
        >
          Ver Demo
        </button>
      </div>
    </section>
  );
}
