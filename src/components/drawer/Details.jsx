import styled from "@emotion/styled"
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"

const Container = styled(Box)`
    margin: 8px;
    border: solid red;
`

const Details = ({ details }) => {
    return <Container>
        {details}
    </Container>
}

export default Details