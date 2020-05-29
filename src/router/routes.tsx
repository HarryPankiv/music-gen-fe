import React from "react";
import { Route } from "react-router";
import { GeneratedAudio } from "../pages/GeneratedAudioPage";
import { GenerateAudioPage } from "../pages/GenerateAudioPage";
import { Header, Box } from "grommet";
import { Cog, InfoCircle } from "@styled-icons/boxicons-regular";

enum RoutePath {
  GenerateAudioPage = "/",
  GeneratedAudioPage = "/generated/:id",
}

export const Routes = () => {
  return (
    <>
      <Header height="50px">
        <Box justify="end" direction="row" width="100%" align="center">
          <Box margin={{right: "20px"}}>
            <Cog size="24px" color="rgba(255, 255, 255, 0.8)" />
          </Box>
          <Box margin={{right: "20px"}}>
            <InfoCircle size="24px" color="rgba(255, 255, 255, 0.8)" />
          </Box>
        </Box>
      </Header>
      <Route
        path={RoutePath.GenerateAudioPage}
        component={GenerateAudioPage}
        exact
      />
      <Route path={RoutePath.GeneratedAudioPage} component={GeneratedAudio} />
    </>
  );
};
