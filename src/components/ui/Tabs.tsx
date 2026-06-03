export default function Tabs() {
  return (
    <div className="flex justify-center gap-3">
      <button
        className="
          rounded-xl
          bg-cyan-500
          px-5
          py-2
          font-semibold
        "
      >
        Piano
      </button>

      <button
        className="
          rounded-xl
          border
          border-white/10
          px-5
          py-2
          font-semibold
          hover:bg-white/5
          transition
        "
      >
        Guitarra
      </button>
    </div>
  );
}
