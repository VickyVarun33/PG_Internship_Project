// src/pages/UserProfile.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
    const location = useLocation();
    const { student } = location.state;

    return (
        <div className="user-profile-container">
            <div className="user-profile-photo">
                <img src={student.image} alt={student.name} className="enhanced-photo" />
            </div>
            <div className="user-profile-details">
                <h1>{student.name}</h1>
                <p><strong>Status:</strong> {student.status}</p>
                <p><strong>Age:</strong> {student.age}</p>
                <p><strong>Date of Birth:</strong> {student.dob}</p>
                <p><strong>Father's Name:</strong> {student.father}</p>
                <p><strong>Mother's Name:</strong> {student.mother}</p>
                <p><strong>Hobbies:</strong> {student.hobbies}</p>
                <p><strong>Graduated School:</strong> {student.school}</p>
                <p><strong>Qualification in U.G:</strong> {student.ug}</p>
                <p><strong>Qualification in P.G:</strong> {student.pg}</p>
                <p><strong>Skills:</strong> {student.skills}</p>
                <p><a href={student.resume} target="_blank" rel="noopener noreferrer">Resume</a></p>
                <p><a href={student.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p><a href={student.socialMedia} target="_blank" rel="noopener noreferrer">Social Media</a></p>
                <p><strong>About:</strong> {student.about}</p>
            </div>
        </div>
    );
};

export default UserProfile;
