import {
  MusicVAE,
  MusicRNN,
  INoteSequence,
  sequences,
  sequenceProtoToMidi,
  constants,
} from "@magenta/music";
import { Tonal, Scale } from "@tonaljs/tonal";
import { player, model } from "./globalConfig";
import { saveAs } from "file-saver";

// Drum Models
const drum_vae = new MusicVAE(
  "https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/drums_2bar_lokl_small"
);
const drum_rnn = new MusicRNN(
  "https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/drum_kit_rnn"
);

// Melody Models
// const melody_vae = new MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_4bar_small_q2')
// const melody_rnn = new MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/melody_rnn');
const melody_rnn = new MusicRNN(
  "https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/chord_pitches_improv"
);

const generateDrums = async () => {
  const drum_samples: INoteSequence[] = await drum_vae.sample(1);
  const continuedSequence: INoteSequence = await drum_rnn.continueSequence(
    drum_samples[0],
    200,
    0.1
  );

  return continuedSequence;
};

const generateMelody = async (
  chordProgression: any,
  program: number,
  instrument?: number,
  velocity?: number
) => {
  // const melody_samples: INoteSequence[] = await melody_vae.sample(1)
  await melody_rnn.initialize();
  const melody_samples: INoteSequence = {
    quantizationInfo: { stepsPerQuarter: 4 },
    notes: [],
    totalQuantizedSteps: 1,
  };
  const continuedSequence: INoteSequence = await melody_rnn.continueSequence(
    melody_samples,
    200,
    1,
    chordProgression
  );
  continuedSequence.notes.forEach((note: any) => {
    note.instrument = instrument;
    note.program = program;
    note.velocity = velocity;
  });

  return continuedSequence;
};

const mergeSequences = (generatedSequences: any[]) => {
  const sequence = sequences.clone(generatedSequences[0]);
  sequence.notes = []

  const mergedTrack = generatedSequences.reduce((acc, el) => {
    acc.notes = [...acc.notes, ...el.notes]
    return acc;
  }, sequence);

  mergedTrack.notes = mergedTrack.notes.sort(
    (a: any, b: any) => a.quantizedStartStep - b.quantizedStartStep
  );

  return mergedTrack;
};

export const generateMusic = async (scale: any) => {
  // const instruments = [5, 8, 9, 10, 11, 12, 15, 17]
  const fittingChords = Scale.scaleChords(scale);
  console.log(fittingChords)
  const drums = await generateDrums();
  const bass = await generateMelody(fittingChords, 32, 1, 75);
  bass.notes.forEach((note: any, index: number) => {
    bass.notes[index].pitch = note.pitch - 32;
  });
  // const instrument_1 = await generateMelody(instruments[Math.floor(Math.random() * 8)], 2);
  const instrument_1 = await generateMelody(9, 2);
  // const instrument_2 = await generateMelody(instruments[Math.floor(Math.random() * 8)], 2);
  // const instrument_3 = await generateMelody(instruments[Math.floor(Math.random() * 8)], 2);
  // const cello = await generateMelody(29, 2);
  // const melody_3 = await generateMelody(77, 3, 0);

  const musicSequence = mergeSequences([drums, bass, instrument_1]);
  exportMIDI(sequences.concatenate([drums, drums, bass, instrument_1]));
  exportMIDI(musicSequence);

  player.start(musicSequence, 100);
};

export const exportMIDI = (sequence: INoteSequence) => {
  console.log(sequence);
  const midi = sequenceProtoToMidi(sequence);
  console.log(midi);
  const file = new Blob([midi], { type: "audio/midi" });

  saveAs(file, `generated-midi-$date.mid`);
};
