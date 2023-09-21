import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from "leaflet"
import fireIcon from "@spectrum-icons/workflow/HotFixes"

const ICON = icon({
    iconUrl: fireIcon,
    iconSize: [32, 32],
})

export const Map = () => {
    const liberiaCenter = [6.3156, -9.3407]; // Centered on Liberia (Latitude, Longitude)

    const markers = [
        { position: [6.2907, -10.7957], name: 'Monrovia' },
        { position: [6.5244, -10.3492], name: 'Buchanan' },
        { position: [7.1907, -7.9934], name: 'Gbarnga' },
        { position: [5.0114, -9.0385], name: 'Greenville' },
        { position: [5.7946, -7.0399], name: 'Voinjama' },
    ];

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <MapContainer
                center={liberiaCenter}
                zoom={8} // Adjust the zoom level as needed
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={marker.position}
                        // icon={ICON}
                    >
                        <Popup>{marker.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
