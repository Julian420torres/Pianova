interface GuitarFretboardProps {
  chord: string;
  frets: number[];
}

const STRINGS = ["E", "A", "D", "G", "B", "e"];

export default function GuitarFretboard({
  chord,
  frets,
}: GuitarFretboardProps) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-4 text-2xl font-bold">{chord}</h3>

      {/* X y O */}
      <div className="mb-2 grid grid-cols-6 gap-0">
        {frets.map((fret, index) => (
          <div
            key={index}
            className="
              flex
              h-8
              w-10
              items-center
              justify-center
              text-lg
              font-bold
            "
          >
            {fret === -1 ? "X" : fret === 0 ? "O" : ""}
          </div>
        ))}
      </div>

      {/* Cejuela */}
      <div className="grid grid-cols-6 gap-0">
        {STRINGS.map((_, index) => (
          <div key={index} className="h-2 w-10 bg-zinc-100" />
        ))}
      </div>

      {/* Trastes */}
      <div className="relative">
        {[0, 1, 2, 3, 4].map((row) => (
          <div key={row} className="grid grid-cols-6 gap-0">
            {STRINGS.map((_, col) => (
              <div
                key={col}
                className="
                  h-12
                  w-10
                  border
                  border-zinc-500
                "
              />
            ))}
          </div>
        ))}

        {/* Puntos */}
        {frets.map((fret, stringIndex) => {
          if (fret <= 0) return null;

          return (
            <div
              key={stringIndex}
              className="
                absolute
                h-5
                w-5
                rounded-full
                bg-cyan-400
                shadow-lg
                shadow-cyan-500/40
              "
              style={{
                left: stringIndex * 40 + 10,
                top: (fret - 1) * 48 + 14,
              }}
            />
          );
        })}
      </div>

      {/* Nombre cuerdas */}
      <div className="mt-3 grid grid-cols-6 gap-0">
        {STRINGS.map((string) => (
          <div
            key={string}
            className="
              w-10
              text-center
              text-xs
              text-zinc-400
            "
          >
            {string}
          </div>
        ))}
      </div>
    </div>
  );
}
