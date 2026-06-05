import Card from "../ui/Card";
import Tabs from "../ui/Tabs";
import ChordInput from "./ChordInput";

interface ChordSearchProps {
  chord: string;
  setChord: (value: string) => void;
  notes: string[];

  instrument: "piano" | "guitar";
  setInstrument: (instrument: "piano" | "guitar") => void;
}

export default function ChordSearch({
  chord,
  setChord,
  notes,
  instrument,
  setInstrument,
}: ChordSearchProps) {
  return (
    <Card>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Buscar acorde</h2>

        <ChordInput value={chord} onChange={setChord} />

        <Tabs instrument={instrument} onChange={setInstrument} />

        <div className="rounded-xl bg-zinc-900 p-6">
          <p className="mb-3 text-zinc-400">Notas del acorde</p>

          <div className="flex gap-2 flex-wrap">
            {notes.map((note) => (
              <span
                key={note}
                className="
                  rounded-lg
                  bg-cyan-500/20
                  px-3
                  py-1
                  text-cyan-300
                "
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
