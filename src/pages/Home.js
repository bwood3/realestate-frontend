import React from 'react';
import backgroundImage from '../images/skyline.jpg';

const Home = () => {
    const homeStyle = {
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

    const comicTextStyle = {
        fontFamily: 'Comic Sans MS, cursive, sans-serif', // add comic book font
        fontSize: '50px',
        color: '#000',
        textShadow: '2px 2px #fff', // add white text shadow
        textAlign: 'center',
        fontWeight: 'bold', // add bold font
    };

    return (
        <div style={homeStyle}>
            <div style={boxStyle}>
                <h1 style={comicTextStyle}>Welcome to the Real Estate Application</h1>
            </div>
        </div>
    );
};

export default Home;