import React, { useState, useEffect } from 'react';

function PropertyCard({ property, onAddToFavorites, onDelete, onRemoveFromFavorites }) {
    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

    const generateRandomMutedColor = () => {
        const colors = [
            '#c1e2ff',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    useEffect(() => {
        setBackgroundColor(generateRandomMutedColor());
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: backgroundColor, outline: "1px solid black", padding: '5px', width: '300px' }}>
            <h2>{property.location}</h2>
            <p>Price: {property.price}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Square Footage: {property.sqrFootage}</p>
            {onAddToFavorites && (
                <button onClick={() => onAddToFavorites(property.id)}>Add to Favorites</button>
            )}
            {onDelete && (
                <>
                    <button onClick={() => onDelete(property.id)}>Delete</button>
                    <button>Edit</button>
                </>
            )}
            {onRemoveFromFavorites && (
                <button onClick={() => onRemoveFromFavorites(property.id)}>Remove from Favorites</button>
            )}
        </div>
    );
}

export default PropertyCard;
