import React from "react";
import { Button } from "grommet";
import { DocumentDownload } from "grommet-icons";
import { useRequest } from "@umijs/hooks";
import { useRouteMatch } from "react-router";
import { sequenceProtoToMidi } from "@magenta/music";

export const ExportMidiButton = () => {
  const match = useRouteMatch<{ id }>();
  const { data: sequence, run: requestExportMidi } = useRequest(
    { url: `/${match.params.id}/export-midi` },
    { manual: true }
  );

  const exportMidi = async () => {
    await requestExportMidi();
    const midi = sequenceProtoToMidi(sequence);
    const file = new Blob([midi], { type: "audio/midi" });

    saveAs(file, `generated-midi-$date.mid`);
  };

  return (
    <Button
      onClick={exportMidi}
      label="Export MIDI"
      // icon={<DocumentDownload color="brand" size="medium" />}
      margin="small"
      
      reverse
    />
  );
};
