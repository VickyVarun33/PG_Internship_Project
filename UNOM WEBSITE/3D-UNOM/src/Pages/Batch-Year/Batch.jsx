// src/pages/BatchYear.jsx
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import "./Batch.css";

const Batch = (props) => {
  const { nodes, materials } = useGLTF("/earth.gltf");
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModelLoaded(true);
    }, 1000); // Delay to ensure the model is loaded properly

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (yearRange) => {
    window.open(`/2020-2023/gallery`, "_blank");
  };

  const handleClicks = (yearRange) => {
    window.open(`/2023-2025/gallery`, "_blank");
  };

  return (
    <div className="batch-container">
      {isModelLoaded && (
        <Canvas className="canvas">
          <ambientLight />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <group {...props} dispose={null}>
              <mesh
                geometry={nodes.Object_4.geometry}
                material={materials["Scene_-_Root"]}
                scale={2.5}
              />
            </group>
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      )}
      <div className="batch-year-container">
        <div className="year-box" onClick={() => handleClick("2020-2023")}>
          2020-2023
        </div>
        <div className="year-box" onClick={() => handleClicks("2023-2025")}>
          2023-2025
        </div>
        {/* Add more year boxes as needed */}
      </div>
    </div>
  );
};

export default Batch;
