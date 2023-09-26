import { useContext } from 'react';
import { createContext } from 'react';
import { useCallback, useEffect, useState } from 'react';

const withFire = createContext(undefined)

const ProvideFire = ({ children }) => {
    const [fires, setFires] = useState(null);
    const [region, setRegion] = useState("world")

    const APIUrl = {
        world: import.meta.env.VITE_WORLD_API_URL,
        usa_can: import.meta.env.VITE_USA_CAN_URL,
        liberia: import.meta.env.VITE_LIBERIA_API_URL,
    }[region]


    useEffect(() => {
        const fetchFire = async () => {
            try {
                await fetch(import.meta.env.VITE_WORLD_API_URL)
                    .then(
                        (response) => { setFires(response) })
                    .catch((error) => {
                        throw new Error("Error fetch fire data", error)
                    })
            } catch (error) {
                console.error("Could not fetch fire data", error)
            }
        }
        fetchFire()
    }, []);

    const ctxValues = {
        setRegion,
        region,
        fires
    }

    return (
        <withFire.Provider value={ctxValues}>{children}</withFire.Provider>
    )

};

const useFires = () => {
    const context = useContext(withFire)
    if (!context) {
        console.error("No provider for useFires context hook")
    }
    return context
}

export { ProvideFire, useFires };
