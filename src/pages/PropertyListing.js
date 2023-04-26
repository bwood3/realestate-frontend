// src/pages/PropertyListing.js

import React, { useState, useEffect } from 'react';
import PropertyForm from '../components/PropertyForm';
import PropertyCard from '../components/PropertyCard';
import { createFavorite } from '../api/favoritesAPI';
import { getProperties as getAllProperties, createProperty as addProperty, updateProperty, deleteProperty } from '../api/propertyListingAPI';

function PropertyListing() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        const data = await getAllProperties();
        setProperties(data);
    };

    const handleAddProperty = async (property) => {
        const newProperty = await addProperty(property);
        setProperties([...properties, newProperty]);
    };

    const handleUpdateProperty = async (property) => {
        await updateProperty(property);
        fetchProperties();
    };

    const handleDeleteProperty = async (propertyId) => {
        await deleteProperty(propertyId);
        setProperties(properties.filter((property) => property.id !== propertyId));
    };

    const handleAddToFavorites = async (propertyId) => {
        const favorite = {
            propertyId: propertyId,
            userId: 1, // Replace this with the actual user ID after implementing authentication
        };
        await createFavorite(favorite);
    };

    return (
        <div>
            <h1>Property Listing</h1>
            <PropertyForm onSubmit={handleAddProperty} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}>
                {properties.map((property) => (
                    <PropertyCard
                        key={property.id}
                        property={property}
                        onAddToFavorites={handleAddToFavorites}
                        onUpdate={handleUpdateProperty}
                        onDelete={handleDeleteProperty}
                    />
                ))}
            </div>
        </div>
    );

}

export default PropertyListing;
