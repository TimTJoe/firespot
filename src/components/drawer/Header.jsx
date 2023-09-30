import React from "react";
import Toolbar from "@mui/material/Toolbar";
import {
    IconButton,
    Typography,
    Box,
    Tooltip,
    Avatar
} from "@mui/material";
import { RxCrossCircled, RxShare2 } from "react-icons/rx"
import styled from "@emotion/styled";
import { useFires } from "@providers/ProvideFire";
const logo = "/fire.png"


const Flexrow = styled(Box)`
    display: flex;
    align-items: center;
    gap: 6px;
`

const Heading = styled(Typography)`
    font-size: 18px;
`


const Header = ({onClose}) => {
    return (
        <Toolbar sx={{ justifyContent: "space-between" }} >
            <Flexrow>
                <Avatar src={logo} sx={{ height: 22, width: 22 }} />
                <Heading variant="h6" color={"GrayText"}>Fire Detail</Heading>
            </Flexrow>
            <Flexrow ml={"auto"}>
                <Tooltip title="Share">
                    <IconButton onClick={onClose} size="small">
                        <RxShare2 />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Close">
                    <IconButton onClick={onClose} size="small">
                        <RxCrossCircled />
                    </IconButton>
                </Tooltip>
            </Flexrow>
        </Toolbar>
    )
}

export default Header