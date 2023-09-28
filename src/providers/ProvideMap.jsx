import { createContext, useContext, useEffect, useState } from "react";

const withMap = createContext(undefined)

const ProvideMap = ({ children }) => {
    const [zoom, setZoom] = useState(6)
    const [region, setRegion] = useState("Africa")


    useEffect(() => {
        setZoom(region === "Global" ? 1 : 5)
    }, [region])

    const center = {
        USA: [37.0902, -95.7129],
        Canada: [56.1304, -106.3468],
        Liberia: [6.4281, -9.4295],
        Global: [0, 0],
        Africa: [1.2921, 27.6536]
    }[region]

    const ctxValue = {
        center,
        zoom,
        setRegion,
        region,
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