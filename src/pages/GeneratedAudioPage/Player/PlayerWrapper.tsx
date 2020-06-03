import React from "react";
import { INoteSequence } from "@magenta/music";

import { usePlayer } from "../../../audio/usePlayer";
import { Player } from "./Player";
import { useUnmount } from "@umijs/hooks";

interface Props {
  sequences: INoteSequence[];
  length: number
}

export const PlayerWrapper = ({ sequences, length }: Props) => {
  const player = usePlayer();

  useUnmount(() => {
    player.stop()
  })

  return <Player player={player} sequences={sequences} length={length} />;
};
