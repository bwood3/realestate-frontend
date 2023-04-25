// src/components/PropertyForm.js

import React, { useState } from 'react';

function PropertyForm({ onSubmit }) {
    const [property, setProperty] = useState({
        address: '',
        price: '',
        description: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProperty({ ...property, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(property);
        setProperty({ address: '', price: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={property.address}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={property.price}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={property.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Add Property</button>
            </div>
        </form>
    );
}

export default PropertyForm;
