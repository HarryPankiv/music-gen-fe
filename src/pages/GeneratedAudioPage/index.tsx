import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import { useRequest } from "@umijs/hooks";
import { Heading, Box, Button } from "grommet";

import { ExportMidiButton } from "./Buttons/ExportMidiButton";
import { ShareLinkButton } from "./Buttons/ShareLinkButton";

import { PlayerWrapper } from "./Player/PlayerWrapper";
import { getBaseURL } from "../../api/getBaseURL";
import { ScreenLoader } from "../../components/ScreenLoader";
import { Page } from "../../components/Page/Page";

export const GeneratedAudio = () => {
  const { push } = useHistory()
  const { params:  { id } } = useRouteMatch<{ id: string}>()

  const { data, loading } = useRequest({
    url: `/getGeneratedAudio?projectId=${id}`,
    prefix: getBaseURL(),
  });

  console.log(data?.sequence)

  if (loading) {
    return <ScreenLoader />;
  }

  if (!data) {
    return <div>
      No audio for this url
    </div>
  }

  return (
    <Page
    >
      <Box margin={{top: "60px"}}/>
      <Heading textAlign="center">Hey, here is your sequence</Heading>
      <Box margin={{bottom: "60px"}} width="312px" alignSelf="center">
        <Button primary label="Generate new sequence" size="medium" onClick={() => push('/')} />
      </Box>
      <PlayerWrapper sequences={data?.sequence} length={data?.length} />
      <Box justify="between" direction="row" margin={{top: "60px"}} height="84px">
        <ExportMidiButton />
        <ShareLinkButton />
      </Box>
    </Page>
  );
};
