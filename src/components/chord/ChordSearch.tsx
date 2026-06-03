import { useState } from "react";

import Card from "../ui/Card";
import Tabs from "../ui/Tabs";
import ChordInput from "./ChordInput";

import { getChordNotes } from "../../lib/chordEngine";

export default function ChordSearch() {
  const [chord, setChord] = useState("C");

  const notes = getChordNotes(chord);

  return (
    <Card>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Buscar acorde</h2>

        <ChordInput value={chord} onChange={setChord} />

        <Tabs />

        <div className="rounded-xl bg-zinc-900 p-6">
          <p className="text-zinc-400 mb-3">Notas del acorde</p>

          <div className="flex gap-2">
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
