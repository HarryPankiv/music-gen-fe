import React from "react";
import { useHistory } from "react-router";
import { useRequest } from "@umijs/hooks";
import { Heading, Box, Button } from "grommet";

import { ExportAudioButton } from "./Buttons/ExportAudioButton";
import { ExportMidiButton } from "./Buttons/ExportMidiButton";
import { ShareLinkButton } from "./Buttons/ShareLinkButton";

import { Player } from "./Player/Player";
import { getBaseURL } from "../../api/getBaseURL";
import { ScreenLoader } from "../../components/ScreenLoader";

export const GeneratedAudio = () => {
  const { push } = useHistory() 
  const { data, loading } = useRequest({
    url: "/:id",
    type: "get",
    prefix: getBaseURL(),
  });

  if (loading) {
    return <ScreenLoader />;
  }

  // if (!data) {
  //   return <div>
  //     No audio for this url
  //   </div>
  // }

  return (
    <Box
      margin="10% 15%"
      align="center"
      pad="40px"
    >
      <Heading>Hey, here is your sequence</Heading>
      <Box margin={{bottom: "60px"}}>
        <Button primary label="Generate new sequence" size="medium" onClick={() => push('/')} />
      </Box>
      {/* <Player sequences={data.instruments} /> */}
      <Player sequences={data?.sequences} />
      <Box justify="between" direction="row" margin={{top: "60px"}}>
        <ExportAudioButton />
        <ExportMidiButton />
        <ShareLinkButton />
      </Box>
    </Box>
  );
};
