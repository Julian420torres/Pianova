import { useEffect, useState } from "react";

import ChordSearch from "./ChordSearch";
import Piano from "../piano/Piano";
import Guitar from "../guitar/Guitar";

import {
  getChordNotes,
  getChordInversions,
  getPianoNotes,
} from "../../lib/chordEngine";

import InversionTabs from "./InversionesTabs";
import RecentChords from "./RecentChords";

export default function ChordApp() {
  const [chord, setChord] = useState("C");

  const [instrument, setInstrument] = useState<"piano" | "guitar">("piano");

  const [selectedInversion, setSelectedInversion] = useState(0);

  const [recentChords, setRecentChords] = useState<string[]>([]);

  const notes = getChordNotes(chord);

  const inversions = getChordInversions(notes);

  const activeNotes = inversions[selectedInversion] ?? notes;

  const pianoNotes = getPianoNotes(activeNotes);

  useEffect(() => {
    if (!chord.trim()) return;

    setRecentChords((prev) => {
      const filtered = prev.filter((item) => item !== chord);

      return [chord, ...filtered].slice(0, 8);
    });
  }, [chord]);

  return (
    <>
      <ChordSearch
        chord={chord}
        setChord={setChord}
        notes={activeNotes}
        instrument={instrument}
        setInstrument={setInstrument}
      />

      <RecentChords chords={recentChords} onSelect={setChord} />

      {instrument === "piano" && inversions.length > 1 && (
        <div className="mt-6 flex justify-center">
          <InversionTabs
            selected={selectedInversion}
            onSelect={setSelectedInversion}
            total={inversions.length}
          />
        </div>
      )}

      {instrument === "piano" ? (
        <Piano activeNotes={pianoNotes} />
      ) : (
        <Guitar chord={chord} />
      )}
    </>
  );
}
