// src/pages/Dept.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../../assets/goldbg.jpg';
import './Dept.css';

const Dept = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Year');
    }

    return (
        <div className="dept-container">
            <div className='overlay'></div>
            <div className="title">
                DEPARTMENTS
            </div>
            <div className="rect-box" onClick={handleClick}>
                Department of Information Technology (IT)
            </div>
        </div>
    );
}

export default Dept;
