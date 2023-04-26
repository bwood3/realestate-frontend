// src/components/PropertyListingCard.js
//for user/owner to view each listing on property listing page with ability to edit/delete
import React, { useState } from 'react';
import PropertyListingEditForm from './PropertyListingEditFrom';

function PropertyListingCard({ property, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdate = (propertyId, updatedProperty) => {
        onUpdate(propertyId, { ...updatedProperty });
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <PropertyListingEditForm onSubmit={handleUpdate} propertyData={property} />
            ) : (
                <>
                    {/* Display property details */}
                    <h2>{property.location}</h2>
                    <p>Price: {property.price}</p>
                    <p>Bedrooms: {property.bedrooms}</p>
                    <p>Bathrooms: {property.bathrooms}</p>
                    <p>Square Footage: {property.sqrFootage}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(property.id)}>Delete</button>
                </>
            )}
        </div>
    );
}

export default PropertyListingCard;
