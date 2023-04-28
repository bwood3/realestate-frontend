import React, { useState, useEffect } from 'react';
import PropertyListingForm from '../components/PropertyListingForm';
import PropertyListingCard from '../components/PropertyListingCard';
import { getListingProperties, createProperty, updateProperty, deleteProperty } from '../api/api';
import backgroundImage from '../images/crosshatch.jpg';

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

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        margin: 'auto',
        maxWidth: '800px',
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        minHeight: '100vh',
    };

    const titleBoxStyle = {
        padding: '10px',
        backgroundColor: '#ffff',
        border: '6px solid #000',
        borderRadius: '9px',
        width: '300px',
        marginBottom: '0px',
    };

    return (
        <div style={containerStyle}>
            <div style={titleBoxStyle}>
                <h1>Property Listing</h1>
            </div>
            <PropertyListingForm onSubmit={handleAddProperty} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {properties.map((property, index) => (
                    <div
                        key={property.id}
                        style={{
                            padding: '10px',
                            backgroundColor: index % 2 === 0 ? '#c1e2ff' : '#e2ffc1',
                            border: '1px solid black',
                            borderWidth: '7px',
                            borderRadius: '6px',
                            width: '300px',
                            height: 'fit-content',
                        }}
                    >
                        <PropertyListingCard
                            property={property}
                            onUpdate={handleUpdateProperty}
                            onDelete={handleDeleteProperty}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PropertyListing;