import PianoKey from "../piano/PianoKey";

interface PianoProps {
  activeNotes?: string[];
}

const WHITE_KEYS = [
  "C1",
  "D1",
  "E1",
  "F1",
  "G1",
  "A1",
  "B1",
  "C2",
  "D2",
  "E2",
  "F2",
  "G2",
  "A2",
  "B2",
];

export default function Piano({ activeNotes = [] }: PianoProps) {
  return (
    <section className="mt-12">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Piano interactivo
        </h2>

        <div className="overflow-x-auto">
          <div className="flex min-w-max justify-center">
            <div className="relative">
              {/* Teclas blancas */}
              <div className="flex">
                {WHITE_KEYS.map((note) => (
                  <PianoKey
                    key={note}
                    note={note.slice(0, -1)}
                    active={activeNotes.includes(note)}
                  />
                ))}
              </div>

              {/* Primera octava */}
              <div className="absolute left-[48px] top-0">
                <PianoKey
                  note="C#"
                  isBlack
                  active={activeNotes.includes("C#1")}
                />
              </div>

              <div className="absolute left-[112px] top-0">
                <PianoKey
                  note="D#"
                  isBlack
                  active={activeNotes.includes("D#1")}
                />
              </div>

              <div className="absolute left-[240px] top-0">
                <PianoKey
                  note="F#"
                  isBlack
                  active={activeNotes.includes("F#1")}
                />
              </div>

              <div className="absolute left-[304px] top-0">
                <PianoKey
                  note="G#"
                  isBlack
                  active={activeNotes.includes("G#1")}
                />
              </div>

              <div className="absolute left-[368px] top-0">
                <PianoKey
                  note="A#"
                  isBlack
                  active={activeNotes.includes("A#1")}
                />
              </div>

              {/* Segunda octava */}
              <div className="absolute left-[496px] top-0">
                <PianoKey
                  note="C#"
                  isBlack
                  active={activeNotes.includes("C#2")}
                />
              </div>

              <div className="absolute left-[560px] top-0">
                <PianoKey
                  note="D#"
                  isBlack
                  active={activeNotes.includes("D#2")}
                />
              </div>

              <div className="absolute left-[688px] top-0">
                <PianoKey
                  note="F#"
                  isBlack
                  active={activeNotes.includes("F#2")}
                />
              </div>

              <div className="absolute left-[752px] top-0">
                <PianoKey
                  note="G#"
                  isBlack
                  active={activeNotes.includes("G#2")}
                />
              </div>

              <div className="absolute left-[816px] top-0">
                <PianoKey
                  note="A#"
                  isBlack
                  active={activeNotes.includes("A#2")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
