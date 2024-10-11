// components/Map.js
'use client';
import React from 'react';

const Map = () => {
    const handleClick = () => {
        const location = 'Ranoli, Sikar';
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        
        // Open a popup window with specified dimensions
        const width = 600;
        const height = 400;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        
        window.open(url, 'Google Maps', `width=${width},height=${height},top=${top},left=${left}`);
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            Open Google Maps
        </button>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
};

export default Map;
