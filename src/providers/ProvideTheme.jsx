import { ThemeProvider, useTheme } from "@mui/material"
import { useMode } from "@providers/ProvideMode"


const ProvideTheme = ({ children }) => {
    const { theme } = useMode()

    return (<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}

export default ProvideTheme