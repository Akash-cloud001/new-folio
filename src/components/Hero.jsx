import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Html, OrbitControls} from "@react-three/drei";
import "../App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Loading from "./ui/Loading";
import Scene from "./ui/Scene";
import { useControls } from "leva";
import BugIcon from "./svgComponents/BugIcon";


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
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      // document.write("mobile device");
      setMousePos({x:0, y:0});
    }else{
      // false for not mobile device
      window.addEventListener("mousemove", handleMouseMove);
    }    

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
    <section className="hero-container absolute h-dvh w-full inset-0">
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
        {/* px-4 sm:px-6 md:px-8 lg:px-11 */}
        <article className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 sm:gap-3 text-color tracking-wider sm:tracking-widest ff-regular text-sm">
          <p>
            TURNING  
          </p> 
          <figure>
            <BugIcon />
          </figure>
          <p className="w-max">
            INTO FEATURES SINCE 2022.
          </p>
        </article>
    </section>
  );
};

export default Hero;
