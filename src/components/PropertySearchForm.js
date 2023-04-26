// src/components/PropertySearchForm.js

import React, { useState } from 'react';

function PropertySearchForm({ onSubmit }) {
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(location);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="location">Location:</label>
            <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default PropertySearchForm;
