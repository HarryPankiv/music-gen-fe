import React from "react";
import { Box, Text, Select } from "grommet";
import { scalesByMode } from "../../../audio/enums";

export const ScaleSelector = ({ mode, scale, setScale}) => {
  return (
    <Box direction="row" width="100%" fill align="center" margin="10px">
      <Text color="dark-4" margin={{ right: "28px" }}>
        Scale
      </Text>
      {mode && (
        <Select
          name="scale"
          options={scalesByMode[mode]}
          onChange={({ option }) => setScale(option)}
          value={scale}
          valueLabel={
            <Box
              align="center"
              pad={{
                horizontal: "20px",
                vertical: "4px",
              }}
              margin={{ left: "32px" }}
            >
              {scale}
            </Box>
          }
        />
      )}
    </Box>
  );
};
