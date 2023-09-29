import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import {
    Drawer as MuiDrawer,
    Button,
    IconButton,
    Typography,
    Divider,
    Avatar,
} from "@mui/material";
import { RxCrossCircled } from "react-icons/rx"
import styled from "@emotion/styled";
import { useFires } from "@providers/ProvideFire";
const logo = "/fire.png"

const Sidebar = styled(MuiDrawer)`
    .MuiDrawer-paper {
    width: 300px;
    box-sizing: border-box;
  }
`

const Flexrow = styled("div")`
    display: flex;
    align-items: center;
    gap: 8px;
`

const Heading = styled(Typography)`
    font-weight: 600;
`



const Drawer = () => {
    const { fireID, setFireID } = useFires()
    const [open, setOpen] = useState(false)
    const onClose = () => setOpen(false)
    const handleOpen = () => {
        setFireID(Math.random())
        setOpen(!open)
    }

    return (
        <>
            <Button onClick={handleOpen} size="small">Sidebar</Button>
            <Sidebar open={open} onClose={onClose} >
                <Toolbar sx={{ justifyContent: "space-between" }} >
                    <Flexrow>
                        <Avatar src={logo} sx={{ height: 30, width: 30 }} />
                        <Heading variant="h6">Firespot</Heading>
                    </Flexrow>
                    <IconButton onClick={onClose} ml={"auto"}>
                        <RxCrossCircled />
                    </IconButton>
                </Toolbar>
                <Divider />
                {fireID}
            </Sidebar>
        </>
    );
};

export default Drawer;
