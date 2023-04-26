// src/pages/FavoritesList.js
import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import { getFavoritesByUserId } from '../api/favoritesAPI';
import { getPropertyById } from '../api/propertyListingAPI';

function FavoritesList() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = async () => {
        const userId = 1; // Replace this with the actual user ID after implementing authentication
        const favoritesData = await getFavoritesByUserId(userId);

        const propertyIds = favoritesData.map((favorite) => favorite.propertyId);
        const propertiesData = await Promise.all(propertyIds.map((id) => getPropertyById(id)));
        setProperties(propertiesData);
    };

    return (
        <div>
            <h1>Favorites List</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}>
                {properties
                    .filter((property) => property && property.id) // Add this filter
                    .map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
            </div>
        </div>
    );
}

export default FavoritesList;




//
// import React, { useState, useEffect } from 'react';
// import PropertyCard from '../components/PropertyCard';
// import { getFavoritesByUserId, createFavorite, removeFromFavorites } from '../api/favoritesAPI';
//
// function FavoritesList() {
//     const [favorites, setFavorites] = useState([]);
//     const [userId, setUserId] = useState('');
//
//     useEffect(() => {
//         if (userId) {
//             fetchFavorites(userId);
//         }
//     }, [userId]);
//
//     const fetchFavorites = async (userId) => {
//         const data = await getFavoritesByUserId(userId);
//         setFavorites(data);
//     };
//
//     const handleAddFavorite = async (event) => {
//         event.preventDefault();
//         const newFavorite = {
//             propertyId: event.target.propertyId.value,
//             userId: userId,
//         };
//         await createFavorite(newFavorite);
//         fetchFavorites(userId);
//     };
//
//     const handleRemoveFromFavorites = async (propertyId) => {
//         await removeFromFavorites(propertyId);
//         setFavorites(favorites.filter((property) => property.id !== propertyId));
//     };
//
//     return (
//         <div>
//             <h1>Favorite List</h1>
//             <div>
//                 {favorites.map((property) => (
//                     <PropertyCard
//                         key={property.id}
//                         property={property}
//                         onRemoveFromFavorites={handleRemoveFromFavorites}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }
//
// export default FavoritesList;
