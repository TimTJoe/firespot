import { Box } from "@mui/material"
import Navigation from "@components/navigation"
import styled from "@emotion/styled"

const Container = styled(Box)`
    position: relative;
`

const Layout = ({ children }) => {
    return (
        <Container >
            <Navigation />
            {children}
        </Container>
    )
}

export default Layout