import GuitarFretboard from "./GuitarFretBoard";

import { GUITAR_CHORDS } from "../../lib/guitarChords";

interface GuitarProps {
  chord: string;
}

export default function Guitar({ chord }: GuitarProps) {
  const frets = GUITAR_CHORDS[chord as keyof typeof GUITAR_CHORDS];

  if (!frets) {
    return (
      <div
        className="
          mt-8
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          text-center
        "
      >
        Acorde no disponible en guitarra
      </div>
    );
  }

  return (
    <section className="mt-12">
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
        "
      >
        <h2 className="mb-8 text-center text-3xl font-bold">Guitarra</h2>

        <GuitarFretboard chord={chord} frets={frets} />
      </div>
    </section>
  );
}
