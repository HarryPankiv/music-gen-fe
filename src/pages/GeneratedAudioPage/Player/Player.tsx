import React, { useState, useEffect } from "react";
import { RangeInput, Button, Box, Text } from "grommet";

import { Pause, Play, VolumeFull, VolumeMute } from "@styled-icons/boxicons-regular";
import { Repeat } from "@styled-icons/evaicons-solid";
import { Replay10, Forward10 } from "@styled-icons/material";
import { toMinutes } from "./helpers/toMinutes";
import { useMount } from "@umijs/hooks";

export const Player = ({ player, sequences, length, tempo = 150 }) => {
  const [current, setCurrent] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useMount(() => {
    player.setTempo(tempo);
  });

  useEffect(() => {
    let timer;
    if (playing) {
      timer = setInterval(() => {
        if (current < length) {
          setCurrent((current) => current + 1);
        }

        if (playing && current === length) {
          if (repeat) {
            player.seekTo(0);
            setCurrent(0);
          } else {
            player.pause();
            setPlaying(false);
          }
        }
      }, 1000);
    } else if (!playing && current !== 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [playing, current, player, length, repeat]);

  const pauseAudio = () => {
    player.pause();
    setPlaying(false);
  };

  const startAudio = () => {
    if (player.getPlayState() === "stopped") {
      player.start(sequences);
    } else {
      player.seekTo(current);
      player.resume();
    }

    setPlaying(true);
  };

  const forward = () => {
    if (current + 10 > length) {
      player.seekTo(length);
      setCurrent(length);
    } else {
      player.seekTo(current + 10);
      setCurrent(current + 10);
    }
  };

  const replay = () => {
    if (current > 10) {
      player.seekTo(current - 10);
      setCurrent(current - 10);
    } else {
      player.seekTo(0);
      setCurrent(0);
    }
  };

  const volume = () => {
    if (muted) {
      player.seekTo(current);
      player.resume();
      setMuted(false)
    } else {
      player.pause();
      setMuted(true)
    }
  };

  return (
    <Box width="100%">
      <RangeInput
        name="current"
        min={0}
        max={length}
        onChange={(e) => {
          setCurrent(Number(e.target.value));
        }}
        onMouseUp={(e: any) => {
          player.seekTo(e.target.value);
        }}
        value={current}
      />
      <Box justify="between" direction="row" align="center">
        <Text>{toMinutes(current)}</Text>
        <Box justify="center" direction="row" alignSelf="center" align="center">
          <Box
            height="42px"
            className={`player-btn${playing ? " player-button--disabled" : ""}`}
          >
            <Button
              disabled={!playing}
              onClick={() => setRepeat((repeat) => !repeat)}
              icon={<Repeat size={18} color={repeat ? "#00b0a6" : undefined} />}
            />
          </Box>
          <PlayerButton Icon={Replay10} onClick={replay} playing={playing} />
          {playing ? (
            <Button onClick={pauseAudio} icon={<Pause size={40} />} />
          ) : (
            <Button onClick={startAudio} icon={<Play size={40} />} />
          )}
          <PlayerButton Icon={Forward10} onClick={forward} playing={playing} />
          <PlayerButton Icon={muted ? VolumeMute : VolumeFull} onClick={volume} playing={playing} />
        </Box>
        <Text>{toMinutes(length)}</Text>
      </Box>
    </Box>
  );
};

const PlayerButton = ({ onClick, playing, Icon }) => {
  return (
    <Box
      height="42px"
      className={`player-btn${playing ? " player-button--disabled" : ""}`}
    >
      <Button disabled={!playing} onClick={onClick} icon={<Icon size={18} />} />
    </Box>
  );
};
