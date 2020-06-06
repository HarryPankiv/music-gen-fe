import React from "react";
import { Link } from "react-router-dom";
import { Text } from "grommet";

export const Stub = () => {
  return (
    <Text textAlign="center">
      Music generation feature is currently not working due to deployment
      issues. Working on configuration. You can listen already created sequence
      &nbsp;
      <Link
        to="/generated/bec459c5-4f0d-423a-a7f1-841bc0d84a0f"
        style={{ textDecoration: "none" }}
      >
        <Text color="brand">here</Text>
      </Link>
      . Or start the project locally as described in readme.txt.
    </Text>
  );
};
