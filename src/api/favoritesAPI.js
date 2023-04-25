// src/api/favoritesAPI.js

const apiUrl = 'https://your-backend-url.com'; // Replace with the actual backend URL

export const getFavoritesByUserId = async (userId) => {
    const response = await fetch(`${apiUrl}/favorites/user/${userId}`);
    return await response.json();
};

export const createFavorite = async (favorite) => {
    const response = await fetch(`${apiUrl}/favorites`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(favorite),
    });
    return await response.json();
};

export const removeFromFavorites = async (propertyId) => {
    await fetch(`${apiUrl}/favorites/${propertyId}`, { method: 'DELETE' });
};
