import React, { useRef } from "react";
import SkyborgTyping from "../3DComponents/SkyborgTyping";
import { Center } from "@react-three/drei";
import { useControls } from "leva";

const Scene = () => {
  const skyborgRef = useRef();
  const planeRef = useRef();
  return (
    <>
      <directionalLight
        position={[0, 2, 0]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight
        position={[0, 2, 0]}
        color="white"
        intensity={2}
        castShadow
      />
      <ambientLight />
      <Center>
        <SkyborgTyping ref={skyborgRef} scale={2}/>
      </Center>
    </>
  );
};

export default Scene;
