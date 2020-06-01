import { useContext } from "react";
import { SoundFontPlayer } from "@magenta/music";
import { getGlobalConfig } from "./globalConfig";
import { playerConfigContext } from "./playerContext";

export const usePlayer = () => {
  const { config } = useContext(playerConfigContext);

  const { drumMap, programMap, globalCompressor } = getGlobalConfig(config);

  return new SoundFontPlayer(
    "https://storage.googleapis.com/download.magenta.tensorflow.org/soundfonts_js/sgm_plus",
    globalCompressor,
    programMap,
    drumMap
  );
};
