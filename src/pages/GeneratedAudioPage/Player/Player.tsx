import React, { useState, useEffect } from "react";
import { RangeInput, Button, Box } from "grommet";
import { INoteSequence } from "@magenta/music";

import { Pause, Play } from "@styled-icons/boxicons-regular";

// import { player } from "../../../audio/globalConfig";

interface Props {
  sequences: INoteSequence[]
}

export const Player = ({ sequences }: Props) => {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const length = 180;

  // useUpdateEffect(() => {
  //   if (!player.isPlaying()) {
  //     player.resume();
  //   }
  //   player.seekTo(current);
  // }, [current]);

  // console.log(player.;

  useEffect(() => {
    let timer;
    if (playing) {
      timer = setInterval(() => {
        setCurrent((current) => current + 1);
      }, 1000);
    } else if (!playing && current !== 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [playing, current]);

  const pauseAudio = () => {
    // player.pause();
    setPlaying(false);
  };

  const startAudio = () => {
    // if (current !== 0) {
    //   player.seekTo(current);
    //   player.resume();
    // } else {
    //   player.start(sequences);
    // }

    setPlaying(true);
  };

  return (
    <Box width="100%">
      <RangeInput
        name="current"
        onChange={(e) => {
          setCurrent(e.target.value);
        }}
        value={current}
      />
      <Box justify="between" direction="row" align="center">
        <span>{current}</span>
        {playing ? (
          <Button onClick={pauseAudio} icon={<Pause size={18} />} />
        ) : (
          <Button onClick={startAudio} icon={<Play size={18} />} />
        )}
        <span>{length}</span>
      </Box>
    </Box>
  );
};
