import React from "react";
import { Button } from "grommet";
import { useRouteMatch } from "react-router";
import copy from "copy-to-clipboard";
// import { Share } from "grommet-icons";
import { ShareAlternative } from "@styled-icons/entypo/ShareAlternative";

export const ShareLinkButton = () => {
  const { url } = useRouteMatch();

  const shareLink = async () => {
    copy(`${window.location.host}${url}`);
  };

  return (
    <Button
      onClick={shareLink}
      label="Share"
      icon={<ShareAlternative size="18" />}
      margin="small"
      reverse
    />
  );
};
