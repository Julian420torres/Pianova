import { NOTES } from "./notes";
import { CHORD_FORMULAS } from "./formulas";

export function getChordNotes(chord: string): string[] {
  if (!chord) return [];

  const isMinor = chord.endsWith("m");

  const root = isMinor ? chord.slice(0, -1) : chord;

  const rootIndex = NOTES.indexOf(root);

  if (rootIndex === -1) return [];

  const formula = isMinor ? CHORD_FORMULAS.minor : CHORD_FORMULAS.major;

  return formula.map((interval) => NOTES[(rootIndex + interval) % 12]);
}
