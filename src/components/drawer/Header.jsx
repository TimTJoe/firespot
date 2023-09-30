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


const Header = ({ onClose }) => {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Share title",
                    text: "Thext context or urs text content",
                    url: "www.thext.com"
                })
            } catch (error) {
                console.error(error)
            }
        } else {
            console.log("Web Share not supported")
        }
    }



    return (
        <Toolbar sx={{ justifyContent: "space-between" }} >
            <Flexrow>
                <Avatar src={logo} sx={{ height: 22, width: 22 }} />
                <Heading variant="h6" >Fire Detail</Heading>
            </Flexrow>
            <Flexrow ml={"auto"}>
                <Tooltip title="Share">
                    <IconButton onClick={handleShare} size="small">
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