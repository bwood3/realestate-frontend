import React from 'react';

function PropertyCard({ property, onAddToFavorites, onDelete, onRemoveFromFavorites }) {
    return (
        <div>
            <h2>{property.location}</h2>
            <p>Price: {property.price}</p>
            <p>Square Footage: {property.sqrFootage}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            {onAddToFavorites && (
                <button onClick={() => onAddToFavorites(property.id)}>Add to Favorites</button>
            )}
            {onDelete && <button onClick={() => onDelete(property.id)}>Delete</button>}
            {onRemoveFromFavorites && (
                <button onClick={() => onRemoveFromFavorites(property.id)}>Remove from Favorites</button>
            )}
        </div>
    );
}

export default PropertyCard;
