import { createContext, useContext, useEffect, useState } from "react";

const withMap = createContext(undefined)

const ProvideMap = ({ children }) => {
    const [zoom, setZoom] = useState(6)
    const [region, setRegion] = useState("Global")


    useEffect(() => {
        setZoom(region === "Global" ? 4 : 8)
    }, [region])

    const center = {
        Global: [6.2907, -10.7957],
        Africa: [6.5244, -10.3492],
        Liberia: [7.1907, -7.9934],
        USA: [5.0114, -9.0385],
        Canada: [5.7946, -7.0399],
    }[region]

    const ctxValue = {
        center,
        zoom
    }


    return (
        <withMap.Provider value={ctxValue}>{children}</withMap.Provider>
    )
}

const useMap = () => {
    const context = useContext(withMap)
    if (!context) {
        console.error("useMap doesn't have a Provider")
    }
    return context
}

export { ProvideMap, useMap }