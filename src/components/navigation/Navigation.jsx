import styled from "@emotion/styled"
import { useState } from "react";
import { Box, Button, ButtonGroup } from "@mui/material"
import { useMode } from "@providers/ProvideMode";

const Group = styled(ButtonGroup)`
  position: absolute;
  top:5%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9000;
`

const Navigation = () => {
    const { switchMode } = useMode()

    return (
        <Group variant="contained" >
            <Button onClick={switchMode}>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </Group>
    )
}

export default Navigation