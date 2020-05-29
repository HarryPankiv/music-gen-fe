import React from "react";
import { Box, Text, Select } from "grommet";

export const ModeSelector = ({ modes, mode, setMode }) => {
  return (
    <Box direction="row" width="100%" fill align="center" margin="10px">
      <Text color="dark-4" margin={{ right: "28px" }}>
        Mode
      </Text>
      <Select
        name="modes"
        options={modes}
        onChange={({ option }) => setMode(option)}
        value={mode}
        valueLabel={
          <Box
            // background="rgba(0, 148, 245, 0.1)"
            align="center"
            pad={{
              horizontal: "20px",
              vertical: "4px",
            }}
            margin={{ left: "32px" }}
          >
            {mode}
          </Box>
        }
      />
    </Box>
  );
};
