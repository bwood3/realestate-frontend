// src/pages/FavoritesList.js
import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import { getFavoritesByUserId, getFavoritePropertyById } from '../api/api';

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

    return (
        <div>
            <h1>Favorites List</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}>
                {properties
                    .filter((property) => property && property.id)
                    .map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
            </div>
        </div>
    );
}

export default FavoritesList;
