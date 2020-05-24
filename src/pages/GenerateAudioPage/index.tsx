import React, { useState } from "react";
import { useHistory } from "react-router";
import { generateMusic } from "../../audio/playerConfig";
import { modes, scalesByMode, keys } from "../../audio/enums";
import { RadioButtonGroup, RangeInput, Box, Button } from "grommet";

export const GenerateAudioPage = () => {
  const { push } = useHistory();
  const [tonic, setTonic] = useState("");
  const [mode, setMode] = useState("");
  const [scale, setScale] = useState("");
  const [tempo, setTempo] = useState("");

  const generate = () => {
    const scale = "F";

    generateMusic(scale);
    push("/generated/:id");
  };

  return (
    <Box
      margin="10% 15%"
      // background="rgba(61, 19, 141, 0.1);"
      pad="40px"
    >
      <RadioButtonGroup
        name="keys"
        options={keys}
        onChange={(e) => setTonic(e.target.value)}
        value={tonic}
      />
      <RadioButtonGroup
        name="modes"
        options={modes}
        onChange={(e) => setMode(e.target.value)}
        value={mode}
      />
      {mode && (
        <RadioButtonGroup
          name="scale"
          options={scalesByMode[mode]}
          onChange={(e) => setScale(e.target.value)}
          value={scale}
        />
      )}
      <RangeInput
        name="tempo"
        min={30}
        max={180}
        value={tempo}
        onChange={(e) => setTempo(e.target.value)}
      />
      <Button onClick={generate}>generate music</Button>
    </Box>
  );
};
