import React, { useState, useEffect, useRef } from 'react';
import './ImageLibrary.css';

const ImageLibrary = () => {
    const [images, setImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [zoom, setZoom] = useState(1);
    const modalRef = useRef(null);
    const imageRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        fetch('/api/images')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setImages(data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    const openModal = (index) => {
        setSelectedIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setZoom(1);
        setIsFullscreen(false);
        setImagePosition({ x: 0, y: 0 });
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    const zoomIn = () => {
        setZoom(prevZoom => prevZoom + 0.1);
    };

    const zoomOut = () => {
        setZoom(prevZoom => (prevZoom - 0.1 > 0 ? prevZoom - 0.1 : 0.1));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            goToPrevious();
        } else if (e.key === 'ArrowRight') {
            goToNext();
        }
    };

    const goToPrevious = () => {
        setSelectedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const goToNext = () => {
        setSelectedIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const handleSwipe = (e) => {
        const { clientX, clientY } = e.changedTouches[0];
        const dx = clientX - modalRef.current.clientX;
        const dy = clientY - modalRef.current.clientY;
        const isHorizontalSwipe = Math.abs(dx) > Math.abs(dy);

        if (isHorizontalSwipe) {
            if (dx > 0) {
                goToPrevious();
            } else {
                goToNext();
            }
        }
    };

    const handleDragStart = (e) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        const dx = e.clientX - dragStart.x;
        const dy = e.clientY - dragStart.y;
        setImagePosition({ x: imagePosition.x + dx, y: imagePosition.y + dy });
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, selectedIndex]);

    return (
        <div className="image-library">
            <h2>Image Library</h2>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div key={image.id} className="image-card" onClick={() => openModal(index)}>
                        <img src={image.url} alt={image.title} />
                        <p>{image.title}</p>
                    </div>
                ))}
            </div>
            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <div
                        className={`modal-content ${isFullscreen ? 'fullscreen' : ''}`}
                        ref={modalRef}
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => (modalRef.current = e.touches[0])}
                        onTouchEnd={handleSwipe}
                    >
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <img
                            id="image-viewer"
                            src={images[selectedIndex].url}
                            alt={images[selectedIndex].title}
                            style={{ transform: `scale(${zoom}) translate(${imagePosition.x}px, ${imagePosition.y}px)` }}
                            onDoubleClick={toggleFullscreen}
                            onMouseDown={handleDragStart}
                            onMouseMove={handleDragMove}
                            onMouseUp={handleDragEnd}
                            onMouseLeave={handleDragEnd}
                        />
                        <div className="zoom-controls">
                            <button onClick={zoomIn}>+</button>
                            <button onClick={zoomOut}>-</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageLibrary;
