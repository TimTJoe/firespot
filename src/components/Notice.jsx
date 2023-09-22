import styled from "@emotion/styled"
import { Box, Button, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import { RxExit, RxInfoCircled } from "react-icons/rx"

const Container = styled(Box)`
    position: absolute;
    bottom: 2%;
    left: 1%;
    z-index: 9000;
    padding: 6px;
    width: 280px;
    min-height: 100px;
    background-color: #fdfdfd89;
    border-radius: 10px;
`

const Body = styled(Typography)`
    padding: 6px;
`

export default function Notice() {
    const [open, setOpen] = useState(true)
    const handlePopper = () => setOpen(!open)

    return (
        <Container >
            <Toolbar variant="dense" spacing={2} >
                <RxInfoCircled />
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{ marginLeft: "auto" }}
                    disableElevation

                >
                    I Get It
                </Button>
            </Toolbar>
            <Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora sit accusantium possimus ad laudantium, fuga, facere maiores.
            </Body>
        </Container>
    )
}