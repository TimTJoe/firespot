import { RxSun, RxMoon } from "react-icons/rx"
import { Button, useTheme } from "@mui/material"
import { useMode } from "@providers/ProvideMode"

function Mode() {
    const theme = useTheme()
    const { switchMode } = useMode()
    const icon = theme.palette.mode === "light" ? <RxSun /> : <RxMoon />


    return (
        <Button
            onClick={switchMode}
            startIcon={icon}>
            {theme.palette.mode}
        </Button>)
}

export default Mode