// src/api/api.js

const favoritesApiUrl = 'https://favoritelistfinal-production.up.railway.app';
const propertySearchApiUrl = 'https://propertysearchfinal-production.up.railway.app';
const propertyListingApiUrl = 'https://propertylistingfinal-production.up.railway.app';

//Favorites API
export const getFavoritesByUserId = async (userId) => {
    const response = await fetch(`${favoritesApiUrl}/favorites/user/${userId}`);
    return await response.json();
};
export const getFavoritePropertyById = async (propertyId) => {
    try {
        const response = await fetch(`${propertyListingApiUrl}/properties/${propertyId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching property by ID:', error);
    }
};

export const createFavorite = async (favorite) => {
    const response = await fetch(`${favoritesApiUrl}/favorites`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(favorite),
    });
    return await response.json();
};

export const removeFromFavorites = async (propertyId) => {
    await fetch(`${favoritesApiUrl}/favorites/${propertyId}`, { method: 'DELETE' });
};

//Property Search API
export const getProperties = async () => {
    const response = await fetch(`${propertySearchApiUrl}/properties`);
    return await response.json();
};

export const searchProperties = async (location) => {
    const response = await fetch(`${propertySearchApiUrl}/properties/search?location=${location}`);
    return await response.json();
};

export const getPropertyById = async (propertyId) => {
    try {
        const response = await fetch(`${propertySearchApiUrl}/properties/${propertyId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching property by ID:', error);
    }
};

//Property Listing API
export const getListingProperties = async () => {
    const response = await fetch(`${propertyListingApiUrl}/properties`);
    return await response.json();
};

export const createProperty = async (property) => {
    const response = await fetch(`${propertyListingApiUrl}/properties`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
    });
    return await response.json();
};

export const updateProperty = async (propertyId, property) => {
    console.log("Sending update request with data:", property);
    console.log("Sending update request with propertyId:", propertyId);
    const response = await fetch(`${propertyListingApiUrl}/properties/${propertyId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
    });

    if (!response.ok) {
        console.error("Update request failed:", await response.text());
    }
};

export const deleteProperty = async (propertyId) => {
    await fetch(`${propertyListingApiUrl}/properties/${propertyId}`, { method: 'DELETE' });
};

export const getListingPropertyById = async (propertyId) => {
    try {
        const response = await fetch(`${propertyListingApiUrl}/properties/${propertyId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching property by ID:', error);
    }
};
