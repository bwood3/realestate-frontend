import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PropertyListing from './pages/PropertyListing';
import PropertySearch from './pages/PropertySearch';
import FavoritesList from './pages/FavoritesList';
import About from './pages/About';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property-listing" element={<PropertyListing />} />
            <Route path="/property-search" element={<PropertySearch />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
