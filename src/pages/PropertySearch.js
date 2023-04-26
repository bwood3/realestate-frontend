
import React, { useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import PropertyCard from '../components/PropertyCard';
import { createFavorite } from '../api/api';
const url = "https://propertysearchfinal-production.up.railway.app"
const PropertySearch = () => {
    const [searchCriteria, setSearchCriteria] = useState({
        location: '',
        minPrice: '',
        maxPrice: '',
        minSqrFootage: '',
        maxSqrFootage: '',
        minBedrooms: '',
        maxBedrooms: '',
        minBathrooms: '',
        maxBathrooms: '',
    });
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `${url}/properties/search`, {
                    params: searchCriteria
                }
            );
            console.log('Response:', response); // Add console log for the response
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching properties:', error);
        }
    };


    const handleInputChange = (e) => {
        setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
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
            <div>
                <label>Location: </label>
                <input
                    type="text"
                    name="location"
                    value={searchCriteria.location}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Price: </label>
                <input
                    type="number"
                    name="minPrice"
                    value={searchCriteria.minPrice}
                    onChange={handleInputChange}
                    placeholder="Min"
                />
                <input
                    type="number"
                    name="maxPrice"
                    value={searchCriteria.maxPrice}
                    onChange={handleInputChange}
                    placeholder="Max"
                />
            </div>
            <div>
                <label>Square Footage: </label>
                <input
                    type="number"
                    name="minSqrFootage"
                    value={searchCriteria.minSqrFootage}
                    onChange={handleInputChange}
                    placeholder="Min"
                />
                <input
                    type="number"
                    name="maxSqrFootage"
                    value={searchCriteria.maxSqrFootage}
                    onChange={handleInputChange}
                    placeholder="Max"
                />
            </div>
            <div>
                <label>Bedrooms: </label>
                <input
                    type="number"
                    name="minBedrooms"
                    value={searchCriteria.minBedrooms}
                    onChange={handleInputChange}
                    placeholder="Min"
                />
                <input
                    type="number"
                    name="maxBedrooms"
                    value={searchCriteria.maxBedrooms}
                    onChange={handleInputChange}
                    placeholder="Max"
                />
            </div>
            <div>
                <label>Bathrooms: </label>
                <input
                    type="number"
                    name="minBathrooms"
                    value={searchCriteria.minBathrooms}
                    onChange={handleInputChange}
                    placeholder="Min"
                />
                <input
                    type="number"
                    name="maxBathrooms"
                    value={searchCriteria.maxBathrooms}
                    onChange={handleInputChange}
                    placeholder="Max"
                />
            </div>
            <button onClick={handleSearch}>Search</button>
            <div>
                {searchResults.map((property) => (
                    <div key={property.id}>
                        <PropertyCard property={property} />
                        <button onClick={() => handleAddToFavorites(property.id)}>
                            Add to Favorites
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertySearch;

