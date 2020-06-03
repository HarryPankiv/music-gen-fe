import React, { useContext } from "react";
import { Button, Heading, Box } from "grommet";
import { playerConfigContext } from "../../audio/playerContext";
import { Slider } from "./Slider";
import { Page } from "../../components/Page/Page";
import { useHistory } from "react-router";

export const Settings = () => {
  const { goBack } = useHistory();
  const { config, setPlayerConfig } = useContext(playerConfigContext);

  return (
    <Page>
      <Heading>Settings</Heading>
      <Box margin={{vertical: "14px"}}>
        <Slider
            text="Master reverb"
            value={config.reverb}
            step={0.01}
            min={0}
            max={1}
            setValue={(reverb) => setPlayerConfig({ ...config, reverb: Number(reverb) })}
        />
        <Slider
            text="Master pan"
            value={config.maxPan}
            step={0.01}
            min={0}
            max={1}
            setValue={(maxPan) => setPlayerConfig({ ...config, maxPan: Number(maxPan) })}
        />
        <Slider
            text="Master distortion"
            value={config.distortion}
            step={0.01}
            min={0}
            max={1}
            setValue={(distortion) => setPlayerConfig({ ...config, distortion: Number(distortion) })}
        />
        <Slider
            text="Master chorus"
            value={config.chorus}
            step={0.1}
            min={1}
            max={10}
            setValue={(chorus) => setPlayerConfig({ ...config, chorus: Number(chorus) })}
        />
      </Box>
      <Box margin={{ top: "6px" }} width="320px" alignSelf="center">
        <Button label="Go back" onClick={() => goBack()} />
      </Box>
    </Page>
  );
};
