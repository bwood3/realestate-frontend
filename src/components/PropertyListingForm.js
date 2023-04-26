// src/components/PropertyListingForm.js
//for user to add property on property listing page
import React, { useState, useEffect } from 'react';

function PropertyListingForm({ onSubmit, propertyData  }) {
    const [property, setProperty] = useState({
        location: '',
        price: '',
        sqrFootage: '',
        bedrooms: '',
        bathrooms: '',
    });

    useEffect(() => {
        if (propertyData) {
            setProperty(propertyData);
        }
    }, [propertyData]);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setProperty({ ...property, [name]: value });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(property);
        setProperty({ location: '', price: '', sqrFootage: '', bedrooms: '', bathrooms: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    style={{ maxWidth: '100%', padding: '5px' }}
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={property.location}
                    onChange={handleChange}
                    required
                />
                <input
                    style={{ maxWidth: '100%', padding: '5px' }}
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={property.price}
                    onChange={handleChange}
                    required
                />
                <input
                    style={{ maxWidth: '100%', padding: '5px' }}
                    type="number"
                    name="sqrFootage"
                    placeholder="Square Footage"
                    value={property.sqrFootage}
                    onChange={handleChange}
                    required
                />
                <input
                    style={{ maxWidth: '100%', padding: '5px' }}
                    type="number"
                    name="bedrooms"
                    placeholder="Bedrooms"
                    value={property.bedrooms}
                    onChange={handleChange}
                    required
                />
                <input
                    style={{ maxWidth: '100%', padding: '5px' }}
                    type="number"
                    name="bathrooms"
                    placeholder="Bathrooms"
                    value={property.bathrooms}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Property</button>
            </div>
        </form>
    );
}

export default PropertyListingForm;

