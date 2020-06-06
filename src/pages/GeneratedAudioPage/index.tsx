import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { useRequest, useUpdateEffect } from "@umijs/hooks";
import { Heading, Box, Button } from "grommet";

import { ExportMidiButton } from "./Buttons/ExportMidiButton";
import { ShareLinkButton } from "./Buttons/ShareLinkButton";

import { PlayerWrapper } from "./Player/PlayerWrapper";
import { getBaseURL } from "../../api/getBaseURL";
import { ScreenLoader } from "../../components/ScreenLoader";
import { Page } from "../../components/Page/Page";
import { isEmpty, isNil } from "ramda";

export const GeneratedAudio = () => {
  const { push } = useHistory()
  const { params:  { id } } = useRouteMatch<{ id: string}>()

  const { data, cancel: stopPollingSequence, error } = useRequest({
    url: `/getGeneratedAudio?projectId=${id}`,
    prefix: getBaseURL(),
  }, { pollingInterval: 10000 });
  const [polling, setPolling] = useState(true)
  const hasSequence = !isNil(data?.sequence) && !isEmpty(data?.sequence)

  useUpdateEffect(() => {
    if (hasSequence) {
      stopPollingSequence()
      setPolling(false)
    }
  }, [data])

  if (polling) {
    return <ScreenLoader />;
  }

  if (!polling && error) {
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
