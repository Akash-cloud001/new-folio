import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls} from "@react-three/drei";
import "../App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Loading from "./Loading";
import Scene from "./ui/Scene";

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
  // const { camX, camY, camZ, fov } = useControls("camera", {
  //   camX: { value: 0, min: -10, max: 10, step: 0.0001 },
  //   camY: { value: 1.50, min: 0, max: 10, step: 0.0001 },
  //   camZ: { value: 5.58, min: 0, max: 10, step: 0.0001 },
  //   fov: { value: 45, min: 10, max: 100, step: 0.0001 },
  // });
  useEffect(()=>{
    camera.position.set(0, 1.50, 5.58)
    camera.fov = 45
    camera.updateProjectionMatrix()
  },[skyborgRef])
  useFrame(()=>{
    if(skyborgRef.current){
      camera.lookAt(skyborgRef.current.position)
    }
  })
  // useFrame(() => {
  //   if (camera) {
  //     camera.position.set(camX, camY, camZ);
  //     camera.fov = fov;
  //     camera.updateProjectionMatrix();
  //   }
  // });
  return null;
};

const Hero = () => {
  return (
    <section className="hero-container">
      <Canvas
        shadows={true}
        dpr={[1, 2]}
        camera={{ position: [0, 1.50, 5.58], fov: 45 }}
      >
        <Suspense fallback={<Loading />}>
        {/* <OrbitControls/> */}
          {/* <color args={["#000"]} attach="background" /> */}
          <Scene />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;
