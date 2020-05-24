import { MusicVAE, Player, SoundFontPlayer } from "@magenta/music";
import { MAX_PAN, MIN_DRUM, MAX_DRUM } from "./constants";

// Set up Multitrack MusicVAE.
export const model = new MusicVAE(
  "https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/multitrack_fb256"
);

// Set up effects chain.
const globalCompressor = new Player.tone.MultibandCompressor();
const globalReverb = new Player.tone.Freeverb(0.25);
const globalLimiter = new Player.tone.Limiter();

globalCompressor.connect(globalReverb);
globalReverb.connect(globalLimiter);
globalLimiter.connect(Player.tone.Master);

// Set up per-program effects.
const programMap = new Map();
for (let i = 0; i < 128; i++) {
  const programCompressor = new Player.tone.Compressor();
  const pan = 2 * MAX_PAN * Math.random() - MAX_PAN;
  const programPanner = new Player.tone.Panner(pan);
  programMap.set(i, programCompressor);
  programCompressor.connect(programPanner);
  programPanner.connect(globalCompressor);
}

// Set up per-drum effects.
const drumMap = new Map();
for (let i = MIN_DRUM; i <= MAX_DRUM; i++) {
  const drumCompressor = new Player.tone.Compressor();
  const pan = 2 * MAX_PAN * Math.random() - MAX_PAN;
  const drumPanner = new Player.tone.Panner(pan);
  drumMap.set(i, drumCompressor);
  drumCompressor.connect(drumPanner);
  drumPanner.connect(globalCompressor);
}

// Set up SoundFont player.
export const player = new SoundFontPlayer(
  "https://storage.googleapis.com/download.magenta.tensorflow.org/soundfonts_js/sgm_plus",
  globalCompressor,
  programMap,
  drumMap
);
