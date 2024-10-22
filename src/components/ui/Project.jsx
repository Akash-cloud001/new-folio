import React, { Suspense, useEffect, useState } from "react";
import CubicalShapeTwo from "../svgComponents/CubicalShapeTwo";
import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "../3DComponents/MacContainer";

const Project = () => {
  const [resize, setResize] = useState("large");


  const handleResize = () => {
    let newSize;
    if (window.innerWidth <= 575) {
      newSize = "small";
    } else if (window.innerWidth <= 768) {
      newSize = "medium";
    } else if (window.innerWidth <= 1024) {
      newSize = "large";
    } else {
      newSize = "extraLarge";
    }
    setResize(newSize)
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="h-[200vh] w-full bg-darker relative">
      <Canvas camera={{ fov: 20, position: [0, 0, 110] }}>
        <Suspense
          fallback={null}
        >
          <Environment files={["./studio_small.hdr"]} />
          <ScrollControls pages={2} damping={0.1}>
            <MacContainer resize={resize} />
          </ScrollControls>
        </Suspense>
      </Canvas>

      <CubicalShapeTwo className="absolute -bottom-5 sm:-bottom-10 md:-bottom-12 lg:-bottom-16 xl:-bottom-20 2xl:-bottom-24 w-full" />
    </section>
  );
};

export default Project;
