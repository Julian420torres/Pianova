interface PianoKeyProps {
  note: string;
  isBlack?: boolean;
  active?: boolean;
}

export default function PianoKey({
  note,
  isBlack = false,
  active = false,
}: PianoKeyProps) {
  if (isBlack) {
    return (
      <div
        className={`
          absolute
          w-10
          h-32
          rounded-b-lg
          border
          z-10
          transition-all
          duration-300
          ${
            active
              ? "bg-cyan-400 border-cyan-300 shadow-lg shadow-cyan-500/50"
              : "bg-black border-zinc-800"
          }
        `}
      />
    );
  }

  return (
    <div
      className={`
        w-16
        h-52
        rounded-b-lg
        border
        flex
        items-end
        justify-center
        pb-3
        font-semibold
        transition-all
        duration-300
        ${
          active
            ? "bg-cyan-300 text-black border-cyan-200"
            : "bg-white text-black border-zinc-300"
        }
      `}
    >
      {note}
    </div>
  );
}
