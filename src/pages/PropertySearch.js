import React, { useState } from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';
import { createFavorite } from '../api/api';
import backgroundImage from '../images/skyline.jpg';
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
                `${url}/properties/search`,
                {
                    params: searchCriteria,
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

    const containerStyle = {
        minHeight: '100vh',
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    };

    const formStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '9px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    };

    const inputStyle = {
        padding: '10px',
        margin: '5px',
        border: '2px solid #000',
        borderRadius: '5px',
        width: '200px',
        fontSize: '16px',
    };

    const labelStyle = {
        fontWeight: 'bold',
        marginRight: '10px',
    };

    const searchButtonStyle = {
        padding: '20px',
        margin: '5px',
        backgroundColor: '#FFC0CB',
        color: 'black',
        border: '2px solid black',
        borderRadius: '20px',
        borderWidth: '2px',
        fontSize: '16px',
    };
    const titleStyle = {
        border: '2px solid black',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '10px',
        outline: '30px',
    };


    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Property Search</h1>
            <form style={formStyle}>
                <div>
                    <label style={labelStyle}>Location: </label>
                    <input
                        type="text"
                        name="location"
                        value={searchCriteria.location}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label style={labelStyle}>Price: </label>
                    <input
                        type="number"
                        name="minPrice"
                        value={searchCriteria.minPrice}
                        onChange={handleInputChange}
                        placeholder="Min"
                        style={inputStyle}
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        value={searchCriteria.maxPrice}
                        onChange={handleInputChange}
                        placeholder="Max"
                            style={inputStyle}
                            />
                            </div>
                            <div>
                            <label style={labelStyle}>Square Footage: </label>
                            <input
                            type="number"
                            name="minSqrFootage"
                            value={searchCriteria.minSqrFootage}
                            onChange={handleInputChange}
                            placeholder="Min"
                            style={inputStyle}
                            />
                            <input
                            type="number"
                            name="maxSqrFootage"
                            value={searchCriteria.maxSqrFootage}
                            onChange={handleInputChange}
                            placeholder="Max"
                            style={inputStyle}
                            />
                            </div>
                            <div>
                            <label style={labelStyle}>Bedrooms: </label>
                            <input
                            type="number"
                            name="minBedrooms"
                            value={searchCriteria.minBedrooms}
                            onChange={handleInputChange}
                            placeholder="Min"
                            style={inputStyle}
                            />
                            <input
                            type="number"
                            name="maxBedrooms"
                            value={searchCriteria.maxBedrooms}
                            onChange={handleInputChange}
                            placeholder="Max"
                            style={inputStyle}
                            />
                            </div>
                            <div>
                            <label style={labelStyle}>Bathrooms: </label>
                            <input
                            type="number"
                            name="minBathrooms"
                            value={searchCriteria.minBathrooms}
                            onChange={handleInputChange}
                            placeholder="Min"
                            style={inputStyle}
                            />
                            <input
                            type="number"
                            name="maxBathrooms"
                            value={searchCriteria.maxBathrooms}
                            onChange={handleInputChange}
                            placeholder="Max"
                            style={inputStyle}
                            />
                            </div>
                            <button onClick={handleSearch} style={searchButtonStyle}>
                            Search
                            </button>
                            </form>
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