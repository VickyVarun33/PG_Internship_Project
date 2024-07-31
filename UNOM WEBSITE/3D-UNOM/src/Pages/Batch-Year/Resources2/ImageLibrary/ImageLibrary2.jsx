// src/pages/ImageLibrary2.jsx
import React, { useState, useEffect } from 'react';
import '../../Resources2/ImageLibrary/ImageLibrary2.css'; // Add CSS file to style the component

const ImageLibrary2 = () => {
    const [images2, setImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetch('/api/images2') // Ensure the correct URL and port
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setImages(data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsOpen(false);
    };

    return (
        <div>
            <h2>Image Library 2</h2>
            <div className="image-grid">
                {images2.map((image) => (
                    <div key={image.id} className="image-card" onClick={() => openModal(image)}>
                        <img src={image.url} alt={image.title} />
                        <p>{image.title}</p>
                    </div>
                ))}
            </div>
            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <img src={selectedImage.url} alt={selectedImage.title} />
                        <p>{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageLibrary2;
