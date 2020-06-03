export const modes = ["major", "minor"];

export const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

const majorScales = [
  "ionian",
  "mixolydian",
  "lydian",
  "phrygian dominant",
  "harmonic major",
  "major pentatonic",
  "whole tone",
];

const minorScales = [
  "aeolian",
  "dorian",
  "harmonic minor",
  "melodic minor",
  "phrygian",
  "minor pentatonic",
  "minor hexatonic",
  "prometheus",
];

export const scalesByMode = {
  minor: minorScales,
  major: majorScales,
};
// const notes = Tonal.Note.names(); // Array 0-16 ("C", "C#", "Db", ...)
