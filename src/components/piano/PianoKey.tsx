interface PianoKeyProps {
  note: string;
  isBlack?: boolean;
}

export default function PianoKey({ note, isBlack = false }: PianoKeyProps) {
  if (isBlack) {
    return (
      <div
        className="
          absolute
          w-10
          h-32
          bg-black
          rounded-b-lg
          border border-zinc-800
          z-10
        "
      />
    );
  }

  return (
    <div
      className="
        w-16
        h-52
        bg-white
        border
        border-zinc-300
        rounded-b-lg
        flex
        items-end
        justify-center
        pb-3
        text-black
        font-semibold
      "
    >
      {note}
    </div>
  );
}
