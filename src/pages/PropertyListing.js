
import React, { useState, useEffect } from 'react';
import PropertyListingForm from '../components/PropertyListingForm';
import PropertyListingCard from '../components/PropertyListingCard';
// import { createFavorite } from '../api/favoritesAPI';
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

    return (
        <div>
            <h1>Property Listing</h1>
            <PropertyListingForm onSubmit={handleAddProperty} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}>
                {properties.map((property) => (
                    <PropertyListingCard
                        key={property.id}
                        property={property}
                        onUpdate={handleUpdateProperty}
                        onDelete={handleDeleteProperty}
                    />
                ))}
            </div>
        </div>
    );
}

export default PropertyListing;
