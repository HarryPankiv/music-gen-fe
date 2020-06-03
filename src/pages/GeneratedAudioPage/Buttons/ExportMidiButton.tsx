import React from "react";
import { isEmpty } from "ramda";
import { Button, Box } from "grommet";
import { saveAs } from "file-saver";
import { DocumentDownload } from "grommet-icons";
import { useRequest, useUpdateEffect } from "@umijs/hooks";

import { useRouteMatch } from "react-router";
import { getBaseURL } from "../../../api/getBaseURL";
import { sequenceProtoToMidi } from "@magenta/music";
import { ScreenLoader } from "../../../components/ScreenLoader";

export const ExportMidiButton = () => {
  const match = useRouteMatch<{ id }>();
  const projectId = match.params.id;
  const {
    data: sequence = { notes: [] },
    loading,
    run: requestExportMidi,
  } = useRequest(
    {
      prefix: getBaseURL(),
      url: `/exportMidi?projectId=${projectId}`,
      method: "post",
    },
    { manual: true }
  );

  useUpdateEffect(() => {
    if (!isEmpty(sequence.notes)) {
      const midi = sequenceProtoToMidi(sequence);
      const file = new Blob([midi], { type: "audio/midi" });

      saveAs(file, `generated-midi-${projectId}.mid`);
    }
  }, [sequence]);

  if (loading) {
    return <ScreenLoader />;
  }

  return (
    <Box height="44px">
      <Button
        onClick={() => requestExportMidi()}
        label="Export MIDI"
        icon={<DocumentDownload size="medium" />}
        margin="small"
        reverse
      />
    </Box>
  );
};
