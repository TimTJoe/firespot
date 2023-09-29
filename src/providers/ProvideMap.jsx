import { createContext, useContext, useEffect, useState } from "react";

const withMap = createContext(undefined)

const ProvideMap = ({ children }) => {
    const [zoom, setZoom] = useState(5)
    const [region, setRegion] = useState("Africa")
    const [center, setCenter] = useState(null)

    useEffect(() => {
        const newCenter = {
            USA: [37.0902, -95.7129],
            Canada: [56.1304, -106.3468],
            Liberia: [6.4281, -9.4295],
            Global: [0, 0],
            Africa: [1.2921, 27.6536]
        }[region]
        setCenter(newCenter)
        setZoom(region === "Global" ? 2 : 5)
    }, [region])


    const ctxValue = {
        center,
        zoom,
        region,
        setRegion,
        setZoom
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