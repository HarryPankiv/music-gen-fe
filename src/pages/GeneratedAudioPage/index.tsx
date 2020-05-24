import React from "react";
import { useHistory } from "react-router";
import { useRequest } from "@umijs/hooks";
import { Ouroboro } from "react-spinners-css";
import { Heading, Box, Button } from "grommet";

import { ExportAudioButton } from "./Buttons/ExportAudioButton";
import { ExportMidiButton } from "./Buttons/ExportMidiButton";
import { ShareLinkButton } from "./Buttons/ShareLinkButton";

import { Player } from "./Player/Player";

export const GeneratedAudio = () => {
  const { push } = useHistory() 
  const { data, loading } = useRequest({
    url: "/:id",
    type: "get",
    prefix: "http://asd.com",
  });

  if (loading) {
    return <Ouroboro />;
  }

  console.log(data);

  // if (!data) {
  //   return <div>
  //     No audio for this url
  //   </div>
  // }

  return (
    <Box
      margin="10% 15%"
      // background="rgba(61, 19, 141, 0.1);"
      pad="40px"
    >
      <Box width="240px">
        <Button label="Generate new sequence" size="small" onClick={() => push('/')} />
      </Box>
      <Heading>Generated sequence</Heading>
      {/* <Player sequences={data.instruments} /> */}
      <Player sequences={data?.sequences} />
      <Box justify="between" direction="row">
        <ExportAudioButton />
        <ExportMidiButton />
        <ShareLinkButton />
      </Box>
    </Box>
  );
};
