import React, { useState } from "react";
import {
    Drawer as MuiDrawer,
    Button,
    Divider,
} from "@mui/material";
import styled from "@emotion/styled";
import { useFires } from "@providers/ProvideFire";
import Header from "./Header";
import Details from "./Details";

const Container = styled(MuiDrawer)`
    .MuiDrawer-paper {
    width: 300px;
    box-sizing: border-box;
  }
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
            <Button onClick={handleOpen} size="small">RX</Button>
            <Container open={open} onClose={onClose} >
                <Header onClose={onClose} />
                <Divider />
                <Details details={fireID} />
            </Container>
        </>
    );
};

export default Drawer;
