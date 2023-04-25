// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/property-search">Property Search</Link>
                </li>
                <li>
                    <Link to="/property-listing">Property Listing</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorite List</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
