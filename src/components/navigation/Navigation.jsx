import styled from "@emotion/styled"
import { useState } from "react";
import { Box, Button, ButtonGroup, useTheme } from "@mui/material"
import { useMode } from "@providers/ProvideMode";
import Refresh from "./components/Refresh";
import Filter from "./components/Mode";
import Options from "./components/Options";

const theme = useTheme()

const Group = styled(ButtonGroup)`
  position: absolute;
  top:5%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9000;
  & > :first-child {
    border-radius: 12px;
  }
  & > :last-child {
    border-radius: 12px;
  }
`

const Navigation = () => {
    const { switchMode } = useMode()

    return (
        <Group variant="contained" >
            <Refresh />
            <Options />
            <Filter />
        </Group>
    )
}

export default Navigation