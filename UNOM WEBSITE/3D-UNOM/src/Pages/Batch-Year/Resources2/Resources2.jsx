// src/pages/Resources2.jsx
import React from 'react';
import '../Resources/Resources.css';

const Resources2 = () => {
    const handleNavigation = (path) => {
        window.open(path, '_blank'); // Open in a new tab
    };

    return (
        <div className="gallery-container">
            <h1>Gallery 2</h1>
            <div className="diamond-box about-box" onClick={() => handleNavigation('/IT-Takkars')}>
                About IT Takkars
            </div>
            <div className="diamond-box" onClick={() => handleNavigation('/2023-2025/imported-image-library')}>
                Pictures
            </div>
            <div className="diamond-box" onClick={() => handleNavigation('/2023-2025/imported-media-library')}>
                Videos
            </div>
        </div>
    );
};

export default Resources2;
