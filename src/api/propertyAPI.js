const apiUrl = 'https://propertysearchfinal-production.up.railway.app';

export const getProperties = async () => {
    const response = await fetch(`${apiUrl}/properties`);
    return await response.json();
};

export const createProperty = async (property) => {
    await fetch(`${apiUrl}/properties`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
    });
};

export const updateProperty = async (propertyId, property) => {
    await fetch(`${apiUrl}/properties/${propertyId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
    });
};

export const deleteProperty = async (propertyId) => {
    await fetch(`${apiUrl}/properties/${propertyId}`, { method: 'DELETE' });
};
export const searchProperties = async (location) => {
    const response = await fetch(`${apiUrl}/properties/search?location=${location}`);
    return await response.json();
};

export const getPropertyById = async (propertyId) => {
    try {
        const response = await fetch(`${apiUrl}/properties/${propertyId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching property by ID:', error);
    }
};
