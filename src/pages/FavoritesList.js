import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import { getFavoritesByUserId, getFavoritePropertyById } from '../api/api';
import backgroundImage from '../images/crosshatch.jpg';

function FavoritesList() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = async () => {
        const userId = 1; // Replace this with the actual user ID after implementing authentication
        const favoritesData = await getFavoritesByUserId(userId);

        const propertyIds = favoritesData.map((favorite) => favorite.propertyId);
        const propertiesData = await Promise.all(propertyIds.map((id) => getFavoritePropertyById(id)));
        setProperties(propertiesData);
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        margin: 'auto',
        maxWidth: '1000px', // Updated maxWidth
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        minHeight: '100vh',
    };

    const titleContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #000', // Added border
        borderRadius: '8px',
        borderWidth: '4px',
        width: '300px',
        padding: '10px',
        marginBottom: '20px',
        backgroundColor: '#fff'
    };

    const titleStyle = {
        margin: '0',
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <div style={titleContainerStyle}>
                <h1 style={titleStyle}>Favorites List</h1>
            </div>
            {properties
                .filter((property) => property && property.id)
                .map((property, index) => (
                    <div
                        key={property.id}
                        style={{
                            padding: '10px',
                            backgroundColor: '#c1e2ff',
                            border: '1px solid black',
                            borderWidth: '7px',
                            borderRadius: '6px',
                            width: '300px',
                            height: 'fit-content',
                        }}
                    >
                        <PropertyCard property={property} />
                    </div>
                ))}
        </div>
    );
}

export default FavoritesList;