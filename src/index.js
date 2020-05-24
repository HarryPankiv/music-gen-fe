import React from "react";
import ReactDOM from "react-dom";
import { GenerateAudioPage } from "./pages/GenerateAudioPage";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Route } from "react-router";
import { GeneratedAudio } from "./pages/GeneratedAudioPage";
import { Grommet } from "grommet";
import { theme } from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Grommet theme={theme}>
        <Route path="/" component={GenerateAudioPage} exact />
        <Route path="/generated/:id" component={GeneratedAudio} />
      </Grommet>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
