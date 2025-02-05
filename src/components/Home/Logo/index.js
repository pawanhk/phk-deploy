import React, { useState } from 'react';
import './index.scss';
import banner1 from '../../../assets/Images/desk.png';
import banner2 from '../../../assets/Images/alt.png';

const Logo = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleImageClick = () => {
        setIsFlipped(!isFlipped); // Toggle the flipped state
    };

    return (
        <div className="logo-container" onClick={handleImageClick}>
            <div className={`flip-card ${isFlipped ? 'rotate' : ''}`}>
                <div className="front">
                    <img src={banner1} alt="Front Side" />
                </div>
                <div className="back">
                    <img src={banner2} alt="Back Side" />
                </div>
            </div>
        </div>
    );
};

export default Logo;
