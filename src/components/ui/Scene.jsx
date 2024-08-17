import React, { useRef } from "react";
import SkyborgTyping from "../3DComponents/SkyborgTyping";
import { useControls } from "leva";

const Scene = () => {
  const skyborgRef = useRef();
  const { rY, pZ, pY, scale, pX } = useControls("SkyBorg", {
    rY: { value: -2.42, min: -Math.PI, max: Math.PI, step: 0.001 },
    pZ: { value: 2.27, min: -10, max: 10, step: 0.001 },
    pY: { value: -2, min: -10, max: 10, step: 0.001 },
    pX: { value: 1.35, min: -10, max: 10, step: 0.001 },
    scale: { value: 2.34, min: 1, max: 10, step: 0.001 },
  });
  return (
    <>
      <directionalLight
        position={[0, 2, 0]}
        intensity={2}
        color={"#f7c232"}
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
      <SkyborgTyping
        ref={skyborgRef}
        scale={scale}
        position={[pX, pY, pZ]}
        rotation={[0, rY, 0]}
      />
    </>
  );
};

export default Scene;
