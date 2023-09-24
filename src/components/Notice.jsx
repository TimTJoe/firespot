import styled from "@emotion/styled"
import { Box, Button, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import { RxExit, RxInfoCircled } from "react-icons/rx"

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
`

export default function Notice() {
    const [open, setOpen] = useState("block")
    const handleOpen = () => setOpen(open === "block" ? "none" : "block")


    return (
        <Container display={open} >
            <Body>
                Data is fetched from the NASA FIRMS API. On this platform, record are only for educational purpose.
                <br />
                <Button
                    onClick={handleOpen}
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 2, mb: 2 }}
                    disableElevation
                >
                    I Understand
                </Button>
                &copy; Timothy T. Joe
            </Body>
        </Container>
    )
}