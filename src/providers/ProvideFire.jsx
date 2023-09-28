import { useContext } from 'react';
import { createContext } from 'react';
import { useEffect, useState } from 'react';

const withFire = createContext(undefined)

const ProvideFire = ({ children }) => {
    const [fires, setFires] = useState(null);

    useEffect(() => {
        const fetchFire = async () => {
            try {
                await fetch(import.meta.env.VITE_WORLD_API_URL)
                    .then(
                        (response) => {
                            if (!response.ok) {
                                throw new Error("Network connection problem")
                            }
                            console.log(response)
                        })
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
