import React from "react";
import ReactDOM from "react-dom";
import { Grommet, Box } from "grommet";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import { theme } from "./theme/theme";
import { Routes } from "./router/routes";

import './theme/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme} full={true}>
        <Box background="#202445" height={{min: "100vh"}} overflow="unset">
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Box>
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
