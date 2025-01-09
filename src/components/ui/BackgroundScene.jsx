import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import InfiniteGrid from "../3DComponents/InfiniteGrid";
import { useControls } from "leva";

const BackgroundScene = () => {
  const [y, setY] = useState();
const {x} = useControls('camera',{
  x: {value: 0, min: -100, max: 100, step: 0.001}
})
  useEffect(()=>{
    const handleScroll = ()=>{

    }
    window.addEventListener('scroll', handleScroll)
    return ()=> window.removeEventListener('scroll', handleScroll)
  },[])
  return (
    <Canvas camera={{ position: [x, 50, 0], fov: 25 }} style={{ background: "#151515" }}>
      <InfiniteGrid />
      <ambientLight intensity={1} />
    </Canvas>
  );
};

export default BackgroundScene;
