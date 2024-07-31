// src/pages/MediaLibrary2.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import defaultThumbnail from '../../../../assets/goldbg.jpg'; // Add this line to import the default thumbnail
import '../../Resources2/MediaLibrary/MediaLibrary2.css';

Modal.setAppElement('#root');

const MediaLibrary2 = () => {
    const [videos2, setVideos2] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);

    useEffect(() => {
        fetch('/api/videos2')
            .then(response => response.json())
            .then(data => setVideos2(data))
            .catch(error => console.error('Error fetching videos:', error));
    }, []);

    const openModal = (video) => {
        setSelectedVideo(video);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedVideo(null);
    };

    const changePlaybackSpeed = (event) => {
        setPlaybackSpeed(event.target.value);
    };

    return (
        <div className="media-library">
            <h2>Media Library 2</h2>
            <div className="video-grid">
                {videos2.map(video => (
                    <div key={video.id} className="video-card" onClick={() => openModal(video)}>
                        <img
                            src={video.thumbnails2 || defaultThumbnail}
                            alt={video.title}
                        />
                        <p>{video.title}</p>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
                className="video-modal"
                overlayClassName="video-modal-overlay"
            >
                {selectedVideo && (
                    <div className="video-modal-content">
                        <h2>{selectedVideo.title}</h2>
                        <video
                            src={selectedVideo.url}
                            controls
                            playbackRate={playbackSpeed}
                        />
                        <div className="playback-speed">
                            <label htmlFor="playbackRate">Playback Speed: </label>
                            <select id="playbackRate" value={playbackSpeed} onChange={changePlaybackSpeed}>
                                <option value="0.5">0.5x</option>
                                <option value="1">1x</option>
                                <option value="1.5">1.5x</option>
                                <option value="2">2x</option>
                            </select>
                        </div>
                        <button className="close-button" onClick={closeModal}>Close</button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default MediaLibrary2;
