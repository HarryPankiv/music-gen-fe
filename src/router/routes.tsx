import React from "react";
import { Route } from "react-router";

import { Info } from "../pages/Info";
import { Settings } from "../pages/Settings";
import { GeneratedAudio } from "../pages/GeneratedAudioPage";
import { GenerateAudioPage } from "../pages/GenerateAudioPage";
import { Header } from "../components/Header";

import { playerConfigContext, usePlayerConfig } from "../audio/playerContext";

export enum RoutePath {
  GenerateAudioPage = "/",
  GeneratedAudioPage = "/generated/:id",
  Settings = "/settings",
  Info = "/info",
}

export const Routes = () => {
  const playerConfig = usePlayerConfig();

  return (
    <playerConfigContext.Provider value={playerConfig}>
      <Header />
      <Route
        path={RoutePath.GenerateAudioPage}
        component={GenerateAudioPage}
        exact
      />
      <Route path={RoutePath.GeneratedAudioPage} component={GeneratedAudio} />
      <Route path={RoutePath.Settings} component={Settings} />
      <Route path={RoutePath.Info} component={Info} />
    </playerConfigContext.Provider>
  );
};
