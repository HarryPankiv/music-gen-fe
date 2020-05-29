import React, { useState, useEffect } from "react";
import { Select, Box, Text } from "grommet";

const optionsByMode = {
  major: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
  minor: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
};

const ValueLabel = ({ value }) => (
  <Box
    align="center"
    pad={{
      horizontal: "4px",
      vertical: "4px",
    }}
    margin={{ left: "32px" }}
  >
    {value}
  </Box>
);

export const ChooseChordProgression = ({ mode, setChordProgression }) => {
  const [one, setOne] = useState("I");
  const [two, setTwo] = useState("IV");
  const [three, setThree] = useState("vi");
  const [four, setFour] = useState("V");

  useEffect(() => {
    setChordProgression([one, two, three, four]);
  }, [setChordProgression, one, two, three, four]);

  return (
    <Box direction="row" width="100%" fill align="center">
      <Text color="dark-4" margin={{ right: "28px" }}>
        Chord progression
      </Text>
      <Select
        margin={{horizontal: "10px"}}
        options={optionsByMode[mode]}
        onChange={({ option }) => setOne(option)}
        value={one}
        valueLabel={<ValueLabel value={one} />}
      />
      <Select
        margin={{horizontal: "10px"}}
        options={optionsByMode[mode]}
        onChange={({ option }) => setTwo(option)}
        value={two}
        valueLabel={<ValueLabel value={two} />}
      />
      <Select
        margin={{horizontal: "10px"}}
        options={optionsByMode[mode]}
        onChange={({ option }) => setThree(option)}
        value={three}
        valueLabel={<ValueLabel value={three} />}
      />
      <Select
        margin={{horizontal: "10px"}}
        options={optionsByMode[mode]}
        onChange={({ option }) => setFour(option)}
        value={four}
        valueLabel={<ValueLabel value={four} />}
      />
    </Box>
  );
};
