import React from 'react'
import { Ouroboro } from "react-spinners-css";
import { Box } from 'grommet';

export const ScreenLoader = () => {
    return (
        <Box justify="center" align="center" width="100vw" height="100vh">
            <Ouroboro color="#FC317A" />
        </Box>
    )
}