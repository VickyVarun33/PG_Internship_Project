// // src/pages/Gallery.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Resources.css';

// const Resources = () => {
//     const navigate = useNavigate();

//     const handleNavigation = (path) => {
//         navigate(path);
//     };


//     return (
//         <div className="gallery-container">
//             <h1>Gallery</h1>
//             <div className="diamond-box about-box" onClick={() => handleNavigation('/IT-Takkars')}>
//                 About IT Takkars
//             </div>
//             <div className="diamond-box" onClick={() => handleNavigation('/2020-2023/imported-image-library')}>
//                 Pictures
//             </div>
//             <div className="diamond-box" onClick={() => handleNavigation('/imported-media-library')}>
//                 Videos
//             </div>
//         </div>
//     );
// };

// export default Resources;

// src/pages/Resources.jsx
import React from 'react';
import './Resources.css';

const Resources = () => {
    const handleNavigation = (path) => {
        window.open(path, '_blank'); // Open in a new tab
    };

    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="diamond-box about-box" onClick={() => handleNavigation('/IT-Seniors')}>
                About IT-Seniors
            </div>
            <div className="diamond-box" onClick={() => handleNavigation('/2020-2023/imported-image-library')}>
                Pictures
            </div>
            <div className="diamond-box" onClick={() => handleNavigation('/2020-2023/imported-media-library')}>
                Videos
            </div>
        </div>
    );
};

export default Resources;
