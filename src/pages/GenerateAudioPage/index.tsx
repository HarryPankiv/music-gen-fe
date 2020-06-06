import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { modes, keys } from "../../audio/enums";
import { Box, Button, Heading, ResponsiveContext } from "grommet";
import { useRequest, useUpdateEffect } from "@umijs/hooks";
import { getBaseURL } from "../../api/getBaseURL";
import { ScreenLoader } from "../../components/ScreenLoader";
import { ChooseChordProgression } from "../../components/ChooseChordProgression";
import { TonicSelector } from "./Components/TonicSelector";
import { ModeSelector } from "./Components/ModeSelector";
import { ScaleSelector } from "./Components/ScaleSelector";
import { TempoRangeInput } from "./Components/TempoRangeInput";

export const GenerateAudioPage = () => {
  const { data, loading, run: requestMusicGenerate } = useRequest(
    (data) => ({
      url: "/generateAudio",
      prefix: getBaseURL(),
      method: "post",
      data,
    }),
    { manual: true }
  );
  const size = useContext(ResponsiveContext);
  const width = {
    large: "900px",
    medium: "760px",
    small: "320px",
  };

  const { push } = useHistory();
  const [tonic, setTonic] = useState("A");
  const [mode, setMode] = useState("minor");
  const [scale, setScale] = useState("aeolian");
  const [tempo, setTempo] = useState(130);
  const [chordProgression, setChordProgression] = useState([]);

  useUpdateEffect(() => {
    push(`/generated/${data.projectId}`);
  }, [data]);

  if (loading) {
    return <ScreenLoader />;
  }

  const generate = () => {
    requestMusicGenerate({
      tonic,
      mode,
      scale,
      tempo,
      chordProgression,
    });
  };

  return (
    <Box width={width[size]} pad="40px" align="center" alignSelf="center">
      <Heading textAlign="center">Create machine learning driven music</Heading>
      {/* <Heading as="small" level="6" color="light-6">using @magenta/music and TensorFlow.js</Heading> */}
      <TonicSelector keys={keys} tonic={tonic} setTonic={setTonic} />
      <ModeSelector modes={modes} mode={mode} setMode={setMode} />
      <ScaleSelector mode={mode} scale={scale} setScale={setScale} />
      {mode && (
        <ChooseChordProgression
          mode={mode}
          setChordProgression={setChordProgression}
        />
      )}
      <TempoRangeInput tempo={tempo} setTempo={setTempo} />
      <Box
        align="center"
        width="260px"
        margin={{ bottom: "50px", top: "50px" }}
      >
        <Button primary onClick={generate} label="Generate music" />
      </Box>
    </Box>
  );
};
