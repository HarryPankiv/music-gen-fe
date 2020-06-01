import React, { useState } from "react";
import { Button, Box } from "grommet";
import copy from "copy-to-clipboard";
import { useRouteMatch } from "react-router";

import { ShareAlternative } from "@styled-icons/entypo/ShareAlternative";

import "./style.scss";

export const ShareLinkButton = () => {
  const [copied, setCopied] = useState(false);
  const { url } = useRouteMatch();

  const shareLink = async () => {
    copy(`${window.location.host}${url}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <Box height="44px">
      <Button
        onClick={shareLink}
        label={copied ? "Copied url" : "Share"}
        icon={copied ? undefined : <ShareAlternative size="18" />}
        id={copied ? "copied-btn" : undefined}
        margin="small"
        reverse
      />
    </Box>
  );
};
