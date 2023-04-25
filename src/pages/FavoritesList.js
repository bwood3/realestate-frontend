// src/pages/FavoritesList.js

import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import { getFavoritesByUserId, createFavorite, removeFromFavorites } from '../api/favoritesAPI';

function FavoritesList() {
    const [favorites, setFavorites] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        if (userId) {
            fetchFavorites(userId);
        }
    }, [userId]);

    const fetchFavorites = async (userId) => {
        const data = await getFavoritesByUserId(userId);
        setFavorites(data);
    };

    const handleAddFavorite = async (event) => {
        event.preventDefault();
        const newFavorite = {
            propertyId: event.target.propertyId.value,
            userId: userId,
        };
        await createFavorite(newFavorite);
        fetchFavorites(userId);
    };

    const handleRemoveFromFavorites = async (propertyId) => {
        await removeFromFavorites(propertyId);
        setFavorites(favorites.filter((property) => property.id !== propertyId));
    };

    return (
        <div>
            <h1>Favorite List</h1>
            <div>
                {favorites.map((property) => (
                    <PropertyCard
                        key={property.id}
                        property={property}
                        onRemoveFromFavorites={handleRemoveFromFavorites}
                    />
                ))}
            </div>
        </div>
    );
}

export default FavoritesList;
