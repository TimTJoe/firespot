import { useContext } from 'react';
import { createContext } from 'react';
import { useCallback, useEffect, useState } from 'react';

const withFire = createContext(undefined)

const ProvideFire = ({ children }) => {
    const [fires, setFires] = useState(null);
    const [region, setRegion] = useState("world")

    const APIUrl = {
        world: import.meta.env.VITE_WORLD_API_URL,
        africa: import.meta.env.VITE_AFRICA_API_URL,
        west_africa: import.meta.env.VITE_WEST_AFRICA_API_URL,
    }[region]

    const fetchFire = useCallback(async () => {
        try {
            const res = await fetch(APIUrl).then((response) => response.json())
            return res
        } catch (error) {
            console.error("Could not fetch fire data")
            return null
        }
    }, [])


    useEffect(() => {
        const response = fetchFire();
        setFires(response)
    }, [APIUrl]);

    const ctxValues = {
        setRegion,
        region,
        fires
    }

    return (<withFire.Provider value={ctxValues}>{children}</withFire.Provider>)

};

const useFires = () => {
    const context = useContext(withFire)
    if (!context) {
        console.error("No provider for useFires context hook")
    }
    return context
}

export { ProvideFire, useFires };
