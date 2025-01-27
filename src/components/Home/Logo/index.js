import React, { useState } from 'react';
import './index.scss';
import banner1 from '../../../assets/Images/desk.png';
import banner2 from '../../../assets/Images/alt.png';

const Logo = () => {
    const [currentImage, setCurrentImage] = useState(banner1);
    const [isRotating, setIsRotating] = useState(false);

    const handleImageClick = (e) => {
        setIsRotating(true); // Start the rotation
        setTimeout(() => {
            setCurrentImage(currentImage === banner1 ? banner2 : banner1); // Toggle image
            setIsRotating(false); // End the rotation after the animation
        }, 600); // Match the CSS animation duration
    };

    return(
        <div className="logo-container" onClick={handleImageClick}>
            <img
                className={`solid-logo ${isRotating ? 'rotate' : ''}`}
                src={currentImage}
                alt="Logo"
            />
        </div>
    );
};

export default Logo;
