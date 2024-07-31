// src/pages/AboutIT2.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Resources/About/AboutIT.css';

const students = [
    { id: 1, name: 'Student 21', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School XYZ', ug: 'B.Sc. in Physics', pg: 'M.Sc. in Physics', skills: 'Java, Spring Boot', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student21' },
    { id: 2, name: 'Student 22', status: 'Active', age: 22, dob: '02-02-2000', father: 'Richard Roe', mother: 'Jane Roe', hobbies: 'Football, Chess', school: 'High School UVW', ug: 'B.A. in History', pg: 'M.A. in History', skills: 'Ruby, Rails', resume: '#', linkedin: '#', socialMedia: '#', about: 'Consectetur adipiscing elit.', image: 'https://via.placeholder.com/150?text=Student22' },
    { id: 3, name: 'Student 3', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student3' },
    { id: 4, name: 'Student 4', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student4' },
    { id: 5, name: 'Student 5', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student5' },
    { id: 6, name: 'Student 6', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student6' },
    { id: 7, name: 'Student 7', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student7' },
    { id: 8, name: 'Student 8', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student8' },
    { id: 9, name: 'Student 9', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student9' },
    { id: 10, name: 'Student 10', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student10' },
    { id: 11, name: 'Student 11', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student11' },
    { id: 12, name: 'Student 12', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student12' },
    { id: 13, name: 'Student 13', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student13' },
    { id: 14, name: 'Student 14', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student14' },
    { id: 15, name: 'Student 15', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student15' },
    { id: 16, name: 'Student 16', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student16' },
    { id: 17, name: 'Student 17', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student17' },
    { id: 18, name: 'Student 18', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student18' },
    { id: 19, name: 'Student 19', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student19' },
    { id: 20, name: 'Student 20', status: 'Active', age: 20, dob: '01-01-2002', father: 'John Doe', mother: 'Jane Doe', hobbies: 'Reading, Painting', school: 'High School ABC', ug: 'B.Sc. in Computer Science', pg: 'M.Sc. in Computer Science', skills: 'JavaScript, React', resume: '#', linkedin: '#', socialMedia: '#', about: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150?text=Student20' },

    // Add more students as needed
];

const AboutIT2 = () => {
    const navigate = useNavigate();

    const handleCardClick = (student) => {
        navigate(`/user-profile/${student.id}`, { state: { student } });
    };

    return (
        <div className="about-it-container">
            {students.map(student => (
                <div key={student.id} className="student-card" onClick={() => handleCardClick(student)}>
                    <img src={student.image} alt={`${student.name}`} />
                    <div className="student-info">
                        <h3>{student.name}</h3>
                        <p>{student.status}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutIT2;
