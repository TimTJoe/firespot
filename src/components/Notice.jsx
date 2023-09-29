import styled from "@emotion/styled"
import { Box, IconButton, Popover, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { RxCrossCircled, RxInfoCircled } from "react-icons/rx"
import Popper from "@mui/material/Popper"



const Container = styled(Box)`
    position: absolute;
    bottom: 4%;
    right: 1%;
    z-index: 9000;
    padding: 6px;
    width: 280px;
    min-height: 100px;
    background-color: #fdfdfdba;
    border-radius: 10px;
    display: ${prop => prop.display};
`

const Body = styled(Typography)`
    padding: 6px;
    width: 360px;
`

const customIconBtn = styled(IconButton)``
const CustomPopover = styled(Popover)``

export default function Notice() {
    const [anchorEl, setAnchorEl] = useState(null)
    const handleOpen = (event) => { setAnchorEl(anchorEl ? null : event.currentTarget) }
    const open = Boolean(anchorEl)

    useEffect(() => {

    }, [])

    return (
        <>
            <IconButton onClick={handleOpen}>
                {anchorEl ? <RxCrossCircled /> : <RxInfoCircled />}
            </IconButton>
            <Popover
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
            >
                <Typography p={2} width={250}>
                    Data is fetched from the NASA FIRMS API. On this platform, record are only for educational purpose.
                </Typography>
            </Popover>
        </>
    )
}