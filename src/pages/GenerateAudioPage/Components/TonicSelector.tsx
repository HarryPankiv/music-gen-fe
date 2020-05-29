import React from "react";
import { Box, Select, Text } from "grommet";

export const TonicSelector = ({ keys, tonic, setTonic }) => {
  return (
    <Box direction="row" width="100%" fill align="center" margin="10px">
      <Text color="dark-4" margin={{ right: "28px" }}>
        Tonic
      </Text>
      <Select
        name="keys"
        options={keys}
        onChange={({ option }) => setTonic(option)}
        value={tonic}
        valueLabel={
          <Box
            // background="rgba(0, 148, 245, 0.1)"
            align="center"
            pad={{ vertical: "4px" }}
            margin={{ left: "32px" }}
          >
            {tonic}
          </Box>
        }
      />
    </Box>
  );
};
