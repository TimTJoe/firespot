import { useContext, useMemo } from 'react';
import { createContext } from 'react';
import { useEffect, useState } from 'react';
import fetchFire from '@helpers/fetchFire';

const withFire = createContext(undefined)

const ProvideFire = ({ children }) => {
    const [fires, setFires] = useState(null);
    const [reload, setReload] = useState(false)
    const handleReload = () => setReload(!reload)

    useEffect(() => {
        try {
            let data = fetchFire()
            setFires(data)
            console.log("reloaded")
        } catch (error) {
            console.error("Error geting data")
        }
    }, [reload]);

    const ctxValues = {
        fires,
        handleReload,
        reload
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
