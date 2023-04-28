import React from 'react';
import backgroundImage from '../images/skyline.jpg';

const About = () => {
    const containerStyle = {
        minHeight: '100vh',
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    };

    const boxStyle = {
        border: '10px solid #000', // add thicker border
        padding: '20px',
        backgroundColor: '#ffc0cb', // add pink background color
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        borderRadius: '10px', // add rounded corners
    };

    const titleStyle = {
        fontFamily: 'Comic Sans MS, cursive, sans-serif', // add comic book font
        fontSize: '50px',
        color: '#000',
        textShadow: '2px 2px #fff', // add white text shadow
        textAlign: 'center',
        fontWeight: 'bold', // add bold font
    };

    const paragraphStyle = {
        fontSize: '1.2rem',
        marginBottom: '10px',
    };

    return (
        <div style={containerStyle}>
            <div style={boxStyle}>
                <h1 style={titleStyle}>About</h1>
                <p style={paragraphStyle}>Property Listing Application</p>
                <p style={paragraphStyle}>Search for properties, add them to your favorites list, and manage property listings.</p>
            </div>
        </div>
    );
};

export default About;