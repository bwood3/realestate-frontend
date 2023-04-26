import React, { useState, useEffect } from 'react';
import PropertyListingForm from '../components/PropertyListingForm';
import PropertyListingCard from '../components/PropertyListingCard';
import { getListingProperties, createProperty, updateProperty, deleteProperty } from '../api/api';

function PropertyListing() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        const data = await getListingProperties();
        setProperties(data);
    };

    const handleAddProperty = async (property) => {
        const newProperty = await createProperty(property);
        setProperties([...properties, newProperty]);
    };

    const handleUpdateProperty = async (propertyId, updatedProperty) => {
        await updateProperty(propertyId, updatedProperty);
        setProperties(
            properties.map((property) =>
                property.id === propertyId ? updatedProperty : property
            )
        );
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
