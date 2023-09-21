import { ThemeProvider, useTheme, createTheme } from "@mui/material"
import { useMode } from "@providers/ProvideMode"
import { useMemo } from "react"


const ProvideTheme = ({ children }) => {
    const { mode } = useMode()
    const theme = useMemo(() => createTheme({
        palette: { mode, },
        typography: {
            button: {
                textTransform: "capitalize",
                fontWeight: 600
            },
        },
    }), [mode]);


    return (<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}

export default ProvideTheme