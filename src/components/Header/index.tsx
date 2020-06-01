import React from "react";
import { Header as GrommetHeader, Box } from "grommet";
import { useHistory } from "react-router";
import { Cog, InfoCircle } from "@styled-icons/boxicons-regular";

import { RoutePath } from "../../router/routes";

export const Header = () => {
  const { push } = useHistory();

  return (
    <GrommetHeader height="50px">
      <Box justify="end" direction="row" width="100%" align="center">
        <Box margin={{ right: "20px" }}>
          <Cog
            size="24px"
            color="rgba(255, 255, 255, 0.8)"
            onClick={() => push(RoutePath.Settings)}
            cursor="pointer"
          />
        </Box>
        <Box margin={{ right: "20px" }}>
          <InfoCircle
            size="24px"
            color="rgba(255, 255, 255, 0.8)"
            onClick={() => push(RoutePath.Info)}
            cursor="pointer"
          />
        </Box>
      </Box>
    </GrommetHeader>
  );
};
