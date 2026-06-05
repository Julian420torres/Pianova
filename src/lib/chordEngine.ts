import { NOTES, FLAT_TO_SHARP } from "./notes";
import { CHORD_FORMULAS } from "./formulas";
export function getChordNotes(chord: string): string[] {
  if (!chord.trim()) return [];

  let root = chord;
  let formula = CHORD_FORMULAS.major;

  const normalizeRoot = (value: string) => FLAT_TO_SHARP[value] ?? value;

  if (chord.endsWith("maj9")) {
    root = chord.replace("maj9", "");
    formula = CHORD_FORMULAS.major9;
  } else if (chord.endsWith("m13")) {
    root = chord.replace("m13", "");
    formula = CHORD_FORMULAS.minor13;
  } else if (chord.endsWith("13")) {
    root = chord.replace("13", "");
    formula = CHORD_FORMULAS.thirteenth;
  } else if (chord.endsWith("m11")) {
    root = chord.replace("m11", "");
    formula = CHORD_FORMULAS.minor11;
  } else if (chord.endsWith("11")) {
    root = chord.replace("11", "");
    formula = CHORD_FORMULAS.eleventh;
  } else if (chord.endsWith("m9")) {
    root = chord.replace("m9", "");
    formula = CHORD_FORMULAS.minor9;
  } else if (chord.endsWith("9")) {
    root = chord.replace("9", "");
    formula = CHORD_FORMULAS.dominant9;
  } else if (chord.endsWith("add9")) {
    root = chord.replace("add9", "");
    formula = CHORD_FORMULAS.add9;
  } else if (chord.endsWith("m7b5")) {
    root = chord.replace("m7b5", "");
    formula = CHORD_FORMULAS.halfDiminished;
  } else if (chord.endsWith("dim7")) {
    root = chord.replace("dim7", "");
    formula = CHORD_FORMULAS.diminished7;
  } else if (chord.endsWith("maj7")) {
    root = chord.replace("maj7", "");
    formula = CHORD_FORMULAS.major7;
  } else if (chord.endsWith("m7")) {
    root = chord.replace("m7", "");
    formula = CHORD_FORMULAS.minor7;
  } else if (chord.endsWith("7")) {
    root = chord.replace("7", "");
    formula = CHORD_FORMULAS.dominant7;
  } else if (chord.endsWith("m6")) {
    root = chord.replace("m6", "");
    formula = CHORD_FORMULAS.minor6;
  } else if (chord.endsWith("6")) {
    root = chord.replace("6", "");
    formula = CHORD_FORMULAS.sixth;
  } else if (chord.endsWith("dim")) {
    root = chord.replace("dim", "");
    formula = CHORD_FORMULAS.diminished;
  } else if (chord.endsWith("aug")) {
    root = chord.replace("aug", "");
    formula = CHORD_FORMULAS.augmented;
  } else if (chord.endsWith("sus2")) {
    root = chord.replace("sus2", "");
    formula = CHORD_FORMULAS.sus2;
  } else if (chord.endsWith("sus4")) {
    root = chord.replace("sus4", "");
    formula = CHORD_FORMULAS.sus4;
  } else if (chord.endsWith("m")) {
    root = chord.replace("m", "");
    formula = CHORD_FORMULAS.minor;
  }

  root = normalizeRoot(root);

  const rootIndex = NOTES.indexOf(root);

  if (rootIndex === -1) return [];

  return formula.map(
    (interval) => NOTES[(rootIndex + interval) % NOTES.length],
  );
}

export function getChordInversions(notes: string[]) {
  if (notes.length < 3) return [notes];

  const inversions = [notes];

  let current = [...notes];

  for (let i = 1; i < notes.length; i++) {
    current = [...current.slice(1), current[0]];
    inversions.push([...current]);
  }

  return inversions;
}

export function getPianoNotes(notes: string[]) {
  const chromaticScale = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  if (!notes.length) return [];

  let octave = 1;

  const result: string[] = [];

  let previousIndex = chromaticScale.indexOf(notes[0]);

  result.push(`${notes[0]}${octave}`);

  for (let i = 1; i < notes.length; i++) {
    const currentIndex = chromaticScale.indexOf(notes[i]);

    if (currentIndex < previousIndex) {
      octave++;
    }

    result.push(`${notes[i]}${octave}`);

    previousIndex = currentIndex;
  }

  return result;
}
