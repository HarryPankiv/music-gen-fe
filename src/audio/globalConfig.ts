import { Player } from "@magenta/music";

export const getGlobalConfig = ({ reverb, chorus, distortion, maxPan, minDrum, maxDrum }) => {
  // Set up effects chain.
  const globalCompressor = new Player.tone.MultibandCompressor();
  const globalReverb = new Player.tone.Freeverb(reverb);
  const globalChorus = new Player.tone.Chorus(chorus)
  const globalDistortion = new Player.tone.Chorus(distortion)
  const globalLimiter = new Player.tone.Limiter();

  globalDistortion.connect(globalChorus)
  globalChorus.connect(globalCompressor)
  globalCompressor.connect(globalReverb);
  globalReverb.connect(globalLimiter);
  globalLimiter.connect(Player.tone.Master);

  // Set up per-program effects.
  const programMap = new Map();
  for (let i = 0; i < 128; i++) {
    const programCompressor = new Player.tone.Compressor();
    const pan = 2 * maxPan * Math.random() - maxPan;
    const programPanner = new Player.tone.Panner(pan);
    programMap.set(i, programCompressor);
    programCompressor.connect(programPanner);
    programPanner.connect(globalCompressor);
  }

  // Set up per-drum effects.
  const drumMap = new Map();
  for (let i = minDrum; i <= maxDrum; i++) {
    const drumCompressor = new Player.tone.Compressor();
    const pan = 2 * maxPan * Math.random() - maxPan;
    const drumPanner = new Player.tone.Panner(pan);
    drumMap.set(i, drumCompressor);
    drumCompressor.connect(drumPanner);
    drumPanner.connect(globalCompressor);
  }

  return { drumMap, programMap, globalCompressor }
}
