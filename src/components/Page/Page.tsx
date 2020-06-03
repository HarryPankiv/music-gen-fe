import React, { useContext } from "react";
import { ResponsiveContext, Box } from "grommet";

export const Page = ({ children }) => {
  const size = useContext(ResponsiveContext);
  const width = {
    small: "400px",
    medium: "700px",
    large: "900px",
  };

  return <Box margin={{top: "100px", bottom: "100px"}} alignSelf="center" width={width[size]}>{children}</Box>;
};
