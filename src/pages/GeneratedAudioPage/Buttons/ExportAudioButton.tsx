import React from "react";
import { Button } from "grommet";
import { Music } from "grommet-icons";

export const ExportAudioButton = () => {
  const exportAudio = async () => {};
  return (
    <Button
      onClick={exportAudio}
      label="Export .mp3"
      // icon={<Music color="brand" size="medium" />}
      margin="small"
      reverse
    />
  );
};
