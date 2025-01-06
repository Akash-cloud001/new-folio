import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import InfiniteGrid from "../3DComponents/InfiniteGrid";

const BackgroundScene = () => {
  return (
    <Canvas style={{ background: "#1d1d1d" }}>
      {/* <OrbitControls /> */}
      <InfiniteGrid />
      <ambientLight intensity={1} />
    </Canvas>
  );
};

export default BackgroundScene;
