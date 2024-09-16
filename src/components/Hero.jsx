import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls} from "@react-three/drei";
import "../App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Loading from "./Loading";
import Scene from "./ui/Scene";
import { useControls } from "leva";

// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension"
// studio.initialize();
// studio.extend(extension)

// Vite
// if (import.meta.env.DEV) {
//   studio.initialize()
//   studio.extend(extension)
// }


gsap.registerPlugin(useGSAP);

const CustomCamera = ({ skyborgRef }) => {
  const { camera } = useThree();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const radius = 7; 
  const minAzimuthalAngle = - (25 * Math.PI) / 180; 
  const maxAzimuthalAngle = (100 * Math.PI) / 180; 

  const dampingFactor = 1; 

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1; 
      const y = -(event.clientY / window.innerHeight) * 2 + 1; 
      setMousePos({ x, y });
    
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);



  useFrame(() => {
    let azimuthalAngle = mousePos.x * Math.PI;

    const deltaX = mousePos.x - prevMousePos.current.x;

    const clampedDeltaX = deltaX * dampingFactor;
    azimuthalAngle = azimuthalAngle - clampedDeltaX;
    azimuthalAngle = Math.max(minAzimuthalAngle, Math.min(maxAzimuthalAngle, azimuthalAngle));
    const newX = radius * Math.sin(azimuthalAngle);
    const newZ = radius * Math.cos(azimuthalAngle);
    // Use GSAP to smoothly update the camera's position
    gsap.to(camera.position, {
      x: newX,
      y: -mousePos.y * 1, // Adjust height based on mouse Y
      z: newZ,
      duration: 2, // Smooth transition
      ease: "power2.out",
    });
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    prevMousePos.current = mousePos;
  });

  return null;
};

const Hero = () => {

  return (
    <section className="hero-container">
      <Canvas
        shadows={true}
        dpr={[1, 2]}
        camera={{ position: [0, 1.50, 5.58], fov: 55 }}
      >
        <Suspense fallback={<Loading />}>
        <CustomCamera />
          <color args={["#151515"]} attach="background" />
          <Scene/>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;
