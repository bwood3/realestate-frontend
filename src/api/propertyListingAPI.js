const apiUrl = 'https://propertylistingfinal-production.up.railway.app';

export const getProperties = async () => {
    const response = await fetch(`${apiUrl}/properties`);
    return await response.json();
};

export const createProperty = async (property) => {
    const response = await fetch(`${apiUrl}/properties`, {
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
    const response = await fetch(`${apiUrl}/properties/${propertyId}`, {
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
    await fetch(`${apiUrl}/properties/${propertyId}`, { method: 'DELETE' });
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