import { useEffect, useState } from 'react';

const useLiberiaFireData = () => {
    const [fireData, setFireData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Define the URLs or endpoints for the three data sources
                const NASA_API_LIB = import.meta.env.VITE_NASA_FIRMS_API_URL_LIB;
                const NASA_API_WORLD = import.meta.env.VITE_NASA_FIRMS_API_URL_WORLD;
                const source2 = 'https://source2-api.com/liberia-fire-data';
                const source3 = 'https://source3-api.com/liberia-fire-data';

                // Fetch data from all three sources concurrently using Promise.all()
                const [data1, data2, data3] = await Promise.all([
                    fetch(NASA_API_LIB).then((response) => response.json()),
                    fetch(NASA_API_WORLD).then((response) => response.json()),
                    fetch(source3).then((response) => response.json()),
                ]);

                // Process and combine the data as needed
                const combinedData = {
                    NASADataLIB: data1,
                    NASADATAWORLD: data2,
                    source3Data: data3,
                };

                // Set the combined data in the state
                setFireData(combinedData);
            } catch (error) {
                console.error('Error fetching fire data:', error);
                setFireData(null);
            }
        };

        // Call the fetchData function when the component mounts
        fetchData();
    }, []); // Empty dependency array to run once when mounted

    return fireData;
};

export default useLiberiaFireData;
