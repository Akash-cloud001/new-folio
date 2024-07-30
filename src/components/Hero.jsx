import React, { Suspense,useEffect,useRef } from "react";
import { Canvas,useFrame, useThree  } from "@react-three/fiber";
import Experience from "./Experience";
import { OrbitControls, CameraShake, Environment } from "@react-three/drei";
import "../App.css";
import { useControls } from "leva";
const Hero = () => {
  const {camX, camY, camZ} = useControls('camera',{
    camX: {value:0, min: 0, max: 100, step: 0.1},
    camY: {value:0, min: 5, max: 100, step: 0.1},
    camZ: {value:0, min: 0, max: 100, step: 0.1}
  })
 
  return (
    <section className="hero-container">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [camX, camY, camZ], fov: 20 }}
      >
        <Suspense fallback={null}>
          <Experience />
          <spotLight position={[50, 50, -30]} castShadow />
          <pointLight position={[-10, -10, -10]} color="white" intensity={3} />
          <pointLight position={[0, -5, 5]} intensity={0.5} />
          <directionalLight position={[0, -5, 0]} color="white" intensity={2} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;
