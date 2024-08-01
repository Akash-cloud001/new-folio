import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Experience from "./Experience";
import { OrbitControls, CameraShake, Environment } from "@react-three/drei";
import "../App.css";
import { useControls } from "leva";
import nx from '../assets/textures/environment/nx.png';
import ny from '../assets/textures/environment/ny.png';
import nz from '../assets/textures/environment/nz.png';
import px from '../assets/textures/environment/px.png';
import py from '../assets/textures/environment/py.png';
import pz from '../assets/textures/environment/pz.png';
import Loading from "./Loading";
import { gsap } from "gsap";

const CustomCamera = () =>{
  const {camera} = useThree();
  const { camX, camY, camZ } = useControls("camera", {
    camX: { value: 0, min: 0, max: 100, step: 0.1 },
    camY: { value: 3, min: 0, max: 100, step: 0.1 },
    camZ: { value: 4, min: 0, max: 100, step: 0.1 },
    fov: {value: 45, min: 10, max: 100, step: 0.1}
  });
  useFrame(() => {
    if(camera){
      camera.position.set(camX, camY, camZ);
    }
  });
  useEffect(() => {
    const animateCamera = () => {
      const path = [
        { x: 0, y: 4, z: 10 },
        { x: 5, y: 10, z: 15 },
        { x: 10, y: 20, z: 20 },
      ];
      gsap.to(camera.position, {
        duration: 3,
        repeat: -1,
        keyframes: path.map(p => ({ x: p.x, y: p.y, z: p.z })),
        ease: "power1.inOut",
        onUpdate: () => camera.updateProjectionMatrix(),
      });
    };

    animateCamera();
  }, [camera]);
  return null;
}

const Hero = () => {
  

  return (
    <section className="hero-container">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 3, 4], fov: 45 }}
      >
        <Suspense fallback={null}>
          <CustomCamera />
          <Environment
            files={[px, nx, py, ny, pz, nz]}
            background
            backgroundBlurriness={0} // optional blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
            backgroundIntensity={0.5}
          />
          <Experience />
          <directionalLight position={[0, -5, 0]} color="white" intensity={2} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;
