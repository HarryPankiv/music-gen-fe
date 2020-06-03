import React from "react";
import { RangeInput, Text, Box } from "grommet";

interface Props {
  text;
  setValue;
  value;
  min?;
  max?;
  step?;
}

export const Slider = ({ text, setValue, ...props }: Props) => {
  return (
    <Box direction="row" margin={{bottom: "20px"}}>
      <Box width="240px">
        <Text color="dark-4" margin={{ right: "28px" }}>
          {text}
        </Text>
      </Box>
      <RangeInput {...props} onChange={(e) => setValue(e.target.value)} />
    </Box>
  );
};
