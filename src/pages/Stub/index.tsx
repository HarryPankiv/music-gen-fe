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
        to="/generated/09bc96d5-118b-46a7-ad84-1a51d5924f7a"
        style={{ textDecoration: "none" }}
      >
        <Text color="brand">here</Text>
      </Link>
      . Or start the project locally as described in readme.txt.
    </Text>
  );
};
