interface RecentChordsProps {
  chords: string[];
  onSelect: (chord: string) => void;
}

export default function RecentChords({ chords, onSelect }: RecentChordsProps) {
  if (chords.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="mb-3 text-lg font-semibold">Recientes</h3>

      <div className="flex flex-wrap gap-2">
        {chords.map((chord) => (
          <button
            key={chord}
            onClick={() => onSelect(chord)}
            className="
              rounded-xl
              bg-zinc-800
              px-4
              py-2
              transition
              hover:bg-cyan-500
            "
          >
            {chord}
          </button>
        ))}
      </div>
    </div>
  );
}
