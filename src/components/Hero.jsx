import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import SkyborgTyping from "./3DComponents/SkyborgTyping";
import { Stage } from "@react-three/drei";
import "../App.css";
import { useControls } from "leva";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Loading from "./Loading";
gsap.registerPlugin(useGSAP);

const CustomCamera = ({ skyborgRef }) => {
  const { camera } = useThree();
  const { camX, camY, camZ, fov } = useControls("camera", {
    camX: { value: 0, min: -10, max: 10, step: 0.0001 },
    camY: { value: 1.98, min: 0, max: 10, step: 0.0001 },
    camZ: { value: 4.63, min: 0, max: 10, step: 0.0001 },
    fov: { value: 45, min: 10, max: 100, step: 0.0001 },
  });

  useFrame(() => {
    if (camera) {
      camera.position.set(camX, camY, camZ);
      camera.fov = fov;
      camera.lookAt(skyborgRef.current.position)
      camera.updateProjectionMatrix();
    }
  });
  // useGSAP(() => {
  //   gsap.to(camera.position, {
  //     y: 3.03,
  //     z: 5.05,
  //     duration: 3,
  //     // ease:'power1.in'
  //   });
  // });

  return null;
};

const Hero = () => {
  const skyborgRef = useRef();
  return (
    <section className="hero-container">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 1.98, 4.63], fov: 45 }}
      >
        <Suspense fallback={<Loading />}>
          <color args={["ff0000"]} attach="background" />
          <Stage
            adjustCamera
            intensity={1}
            shadows="contact"
            environment="city"
          >
            <SkyborgTyping ref={skyborgRef} scale={[0.5,0.5,0.5]} />
          </Stage>

          <CustomCamera skyborgRef={skyborgRef} />
          {/* <directionalLight position={[0, -5, 0]} color="white" intensity={2} /> */}
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;
