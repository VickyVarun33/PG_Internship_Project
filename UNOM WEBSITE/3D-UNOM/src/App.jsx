// src/App.jsx
import React,{useState, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Dept from './Pages/Dept/Dept.jsx';
import './App.css';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import Earth from '../public/Earth.jsx'
import Batch from './Pages/Batch-Year/Batch.jsx';
import Resources from './Pages/Batch-Year/Resources/Resources.jsx';
import Resources2 from './Pages/Batch-Year/Resources2/Resources2.jsx'
import AboutIT from './Pages/Batch-Year/Resources/About/AboutIT.jsx';
import AboutIT2 from './Pages/Batch-Year/Resources2/About/AboutIT2.jsx';
import UserProfile from './Pages/UserProfile.jsx';
import ImageLibrary from './Pages/Batch-Year/Resources/ImageLibrary/ImageLibrary.jsx';
import ImageLibrary2 from './Pages/Batch-Year/Resources2/ImageLibrary/ImageLibrary2.jsx';
import MediaLibrary from './Pages/Batch-Year/Resources/MediaLibrary/MediaLibrary.jsx';
import MediaLibrary2 from './Pages/Batch-Year/Resources2/MediaLibrary/MediaLibrary2.jsx';
// import { AmbientLight } from 'three';


const App = () => {
    return (<>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Start" element={<Dept />} />
                <Route path="/Year"  element={<Batch />} />
                <Route path="/2020-2023/gallery" element={<Resources />} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                <Route path="/IT-Seniors" element={<AboutIT />} />
                <Route path="/user-profile/:id" element={<UserProfile />} />   //this is for both Resources.jsx & Resources2.jsx
                <Route path="/2020-2023/imported-image-library/" element={<ImageLibrary />} />
                <Route path="/2020-2023/imported-media-library" element={<MediaLibrary />} />
                <Route path="/2023-2025/gallery" element={<Resources2 />} />
                <Route path="/IT-Takkars" element={<AboutIT2 />} />
                <Route path="/2023-2025/imported-image-library/" element={<ImageLibrary2 />} />
                <Route path="/2023-2025/imported-media-library/" element={<MediaLibrary2 />} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
