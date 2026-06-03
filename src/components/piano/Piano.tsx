import PianoKey from "../piano/pianoKey";

interface PianoProps {
  activeNotes?: string[];
}

export default function Piano({ activeNotes = [] }: PianoProps) {
  return (
    <section className="mt-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Piano interactivo
        </h2>

        <div className="flex justify-center">
          <div className="relative">
            <div className="flex">
              <PianoKey note="C" active={activeNotes.includes("C")} />

              <PianoKey note="D" active={activeNotes.includes("D")} />

              <PianoKey note="E" active={activeNotes.includes("E")} />

              <PianoKey note="F" active={activeNotes.includes("F")} />

              <PianoKey note="G" active={activeNotes.includes("G")} />

              <PianoKey note="A" active={activeNotes.includes("A")} />

              <PianoKey note="B" active={activeNotes.includes("B")} />
            </div>

            <div className="absolute left-[48px] top-0">
              <PianoKey note="C#" isBlack active={activeNotes.includes("C#")} />
            </div>

            <div className="absolute left-[112px] top-0">
              <PianoKey note="D#" isBlack active={activeNotes.includes("D#")} />
            </div>

            <div className="absolute left-[240px] top-0">
              <PianoKey note="F#" isBlack active={activeNotes.includes("F#")} />
            </div>

            <div className="absolute left-[304px] top-0">
              <PianoKey note="G#" isBlack active={activeNotes.includes("G#")} />
            </div>

            <div className="absolute left-[368px] top-0">
              <PianoKey note="A#" isBlack active={activeNotes.includes("A#")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
