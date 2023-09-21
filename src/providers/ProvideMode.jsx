import { useContext, createContext, useMemo, useState, useCallback } from "react"
import { createTheme } from "@mui/material";

const withMode = createContext(undefined)

const ProvideMode = ({ children }) => {

    const [mode, setMode] = useState('light');

    const switchMode = useCallback(() => {
        setMode(mode === 'light' ? 'dark' : 'light');
    }, [mode]);


    const ctxValues = {
        switchMode,
        mode
    }

    return (<withMode.Provider value={ctxValues}>{children}</withMode.Provider>)
}

const useMode = () => {
    const context = useContext(withMode)
    if (!context) {
        console.error("useMode doesn't have a Provider.")
    }
    return context
}

export { ProvideMode, useMode }