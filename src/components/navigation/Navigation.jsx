import styled from "@emotion/styled"
import { useState } from "react";
import { Box, Button, ButtonGroup } from "@mui/material"

const Group = styled(ButtonGroup)`
  position: absolute;
  top:5%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9000;
`

const Navigation = () => {

    return (
        <Group variant="contained" >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </Group>
    )
}

export default Navigation