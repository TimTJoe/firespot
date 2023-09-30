import styled from "@emotion/styled"
import { useState } from "react";
import { Box, Button, ButtonGroup, useTheme } from "@mui/material"
import { useMode } from "@providers/ProvideMode";
import Update from "./components/Update";
import Filter from "./components/Mode";
import Options from "./components/Region";
import { grey } from "@mui/material/colors";
import Notice from "@components/Notice"
import Drawer from "@components/drawer";


const Group = styled(ButtonGroup)`
  position: absolute;
  top:5%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border-radius: 23px;
  background-color: ${grey[400]};
  & > :first-child {
    border-bottom-left-radius: 23px;
    border-top-left-radius: 23px;
  }
  & > :last-child {
    border-bottom-right-radius: 23px;
    border-top-right-radius: 23px;
  }
`

const Navigation = () => {
  const { switchMode } = useMode()

  return (
    <Group variant="contained" disableElevation>
      <Drawer />
      <Notice />
      <Update />
      <Options />
      <Filter />
    </Group>
  )
}

export default Navigation