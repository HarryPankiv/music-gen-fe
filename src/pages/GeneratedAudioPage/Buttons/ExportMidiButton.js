import React from "react";
import { Button } from "grommet";
import { DocumentDownload } from "grommet-icons";
// import { useRequest } from "@umijs/hooks";
// import { useRouteMatch } from "react-router";

export const ExportMidiButton = () => {
  // const match = useRouteMatch();
  // const { run: requestExportMidi } = useRequest(
  //   { url: `/${match.params.id}/export-midi` },
  //   { manual: true }
  // );

  const exportMidi = async () => {
    // await requestExportMidi();
  };

  return (
    <Button
      onClick={exportMidi}
      label="Export MIDI"
      icon={<DocumentDownload color="brand" size="medium" />}
      margin="small"
      reverse
    />
  );
};
