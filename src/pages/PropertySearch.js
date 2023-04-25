// src/pages/PropertySearch.js

import React, { useState } from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';
import { createFavorite } from '../api/favoritesAPI';

const PropertySearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`localhost:8080/properties/search?query=${searchQuery}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching properties:', error);
        }
    };

    const handleAddToFavorites = async (propertyId) => {
        const favorite = {
            propertyId: propertyId,
            userId: 1, // Assuming user ID of 1
        };
        await createFavorite(favorite);
    };

    return (
        <div>
            <h1>Property Search</h1>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter search query"
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {searchResults.map((property) => (
                    <PropertyCard
                        key={property.id}
                        property={property}
                        onAddToFavorites={handleAddToFavorites}
                    />
                ))}
            </div>
        </div>
    );
};

export default PropertySearch;
