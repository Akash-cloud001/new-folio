import React, { Suspense, useMemo, useRef, useState } from "react";
import SkyborgTyping from "../3DComponents/SkyborgTyping";
import { useControls } from "leva";
import CurvedPlane from "../3DComponents/CurvedPlane";
import * as THREE from "three";
import src from "/errorVideo.mp4";
import { Center, useVideoTexture } from "@react-three/drei";
import Text from "../3DComponents/Text";

function VideoMaterial({ src, setVideo }) {
  const texture = useVideoTexture(src);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  texture.offset.x = 1;

  setVideo?.(texture.image);

  return (
    <meshStandardMaterial
      side={THREE.DoubleSide}
      map={texture}
      toneMapped={false}
      transparent
      opacity={0.9}
    />
  );
}

const Scene = () => {
  const coderRef = useRef();
  const skyborgRef = useRef();
  // const { rY, pZ, pY, scale, pX } = useControls("SkyBorg", {
  //   rY: { value: -2.42, min: -Math.PI, max: Math.PI, step: 0.001 },
  //   pZ: { value: 2.27, min: -10, max: 10, step: 0.001 },
  //   pY: { value: -2, min: -10, max: 10, step: 0.001 },
  //   pX: { value: 1.35, min: -10, max: 10, step: 0.001 },
  //   scale: { value: 2.34, min: 1, max: 10, step: 0.001 },
  // });
  // const {vX, vY,vZ} = useControls("Curvedplane",{
  //   vX:{value:0, min: -10, max: 10, step:0.001},
  //   vY:{value:0, min: -10, max: 10, step:0.001},
  //   vZ:{value:0, min: -10, max: 10, step:0.001},
  // })
  const {sX, sY, sZ, rx, ry, rz} = useControls('sky',{
    sY:{value:0.75, min:-5,max:5,step:0.001},
    rx: { value: -0.18, min: -Math.PI, max: Math.PI, step: 0.001 },
    ry: { value: 0.0, min: -Math.PI, max: Math.PI, step: 0.001 },
    rz: { value: 0, min: -Math.PI, max: Math.PI, step: 0.001 },
  })
  const [video, setVideo] = useState();
  const ratio = 16 / 9;
  const width = 4;
  const radius = 4;
  const r = useMemo(
    () => (video ? video.videoWidth / video.videoHeight : ratio),
    [video, ratio]
  );
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
      <Center>
        <group scale={0.75} position={[0,sY,0]} rotation={[rx,ry,rz]}>
          <Text alphabet='S' position={[-0.09,0,0]}/>
          <Text alphabet='k' position={[0.84,0,0]}/>
          <Text alphabet='Y' position={[1.65,0,0]}/>
          <Text alphabet='F' position={[2.85,0,0]}/>
          <Text alphabet='O' position={[3.74,0,0]}/>
          <Text alphabet='L' position={[4.80,0,0]}/>
          <Text alphabet='I' position={[5.65,0,0]}/>
          <Text alphabet='O' position={[5.98,0,0]}/>
        </group>
      </Center>


      <group ref={coderRef} scale={0.75}>
        <SkyborgTyping
          ref={skyborgRef}
          scale={2.34}
          position={[1.35, -2.42, 2.27]}
          rotation={[0, -2.42, 0]}
        />


        <CurvedPlane width={width} height={width / r} radius={radius} rotation={[0, -2.42, 0]} position={[-0.75, 0.37, 0.19]}>
          <Suspense
            fallback={<meshStandardMaterial side={THREE.DoubleSide} wireframe />}
          >
            <VideoMaterial src={src} setVideo={setVideo} />
          </Suspense>
        </CurvedPlane>
      </group>

    </>
  );
};

export default Scene;
