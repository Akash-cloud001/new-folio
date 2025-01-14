import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import InfiniteGrid from "../3DComponents/InfiniteGrid";
import { useControls } from "leva";

const BackgroundScene = () => {
  const [y, setY] = useState();
  // const {x} = useControls('camera',{
  //   x: {value: 0, min: -100, max: 100, step: 0.001}
  // })
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Normalize scroll position based on window height
      const maxScroll = window.innerHeight; // Maximum scroll value
      const currentScroll = window.scrollY; // Current scroll value
      const normalizedScroll = Math.min(currentScroll / maxScroll, 10); // Normalize to [0, 1]
      setScrollPosition(normalizedScroll); // Set normalized scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Canvas
      camera={{ position: [0, 50, 0], fov: 25 }}
      style={{ background: "#151515" }}
    >
      {/* <OrbitControls /> */}
      <InfiniteGrid scrollPosition={scrollPosition}/>
      <ambientLight intensity={1} />
    </Canvas>
  );
};

export default BackgroundScene;
