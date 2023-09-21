import { RxSun } from "react-icons/rx"
import { Button, useTheme } from "@mui/material"
import { useMode } from "@providers/ProvideMode"

function Mode() {
    const theme = useTheme()
    const { switchMode } = useMode()
    return (<Button onClick={switchMode} startIcon={<RxSun />}>{theme.palette.mode}</Button>)
}

export default Mode