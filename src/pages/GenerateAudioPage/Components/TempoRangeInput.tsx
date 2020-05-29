import React from "react";
import { Box, Text, RangeInput } from "grommet";

export const TempoRangeInput = ({ tempo, setTempo }) => {
  return (
    <Box direction="row" width="100%" margin="20px">
      <Text color="dark-4" margin={{ right: "28px" }}>
        Tempo
      </Text>
      <RangeInput
        name="tempo"
        min={30}
        max={180}
        value={tempo}
        onChange={(e) => setTempo(e.target.value)}
      />
      <Text color="dark-4" margin={{ left: "28px" }}>
        {tempo}
      </Text>
    </Box>
  );
};
