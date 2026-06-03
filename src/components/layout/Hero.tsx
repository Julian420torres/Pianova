export default function Hero() {
  return (
    <section className="py-20 text-center">
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
        PianoChord
      </h1>

      <p className="mt-6 text-xl text-zinc-400">
        Aprende acordes de piano y guitarra visualmente.
      </p>
    </section>
  );
}
