import { useContext, useMemo } from 'react';
import { createContext } from 'react';
import { useEffect, useState } from 'react';
import fetchFire from '@helpers/fetchFire';

const withFire = createContext(undefined)

const ProvideFire = ({ children }) => {
    const [fires, setFires] = useState(null);

    useEffect(() => {
        setFires(fetchFire())
    }, [])

    const ctxValues = {
        setFires,
        fires,
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
