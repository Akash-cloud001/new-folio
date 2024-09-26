import { Center, OrbitControls, Clouds, Cloud } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useControls } from "leva";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Text from "./3DComponents/Text";
import Skyborg from "./3DComponents/Skyborg";
import floorMap from "../assets/textures/floorImg.png";
gsap.registerPlugin(useGSAP);
const Experience = () => {
  const skyArr = ["S", "K", "Y"];
  const folioArr = ["F", "O", "L", "I", "O"];
  const skyRef = useRef([]);
  const folioRef = useRef([]);

  const floorTexture = useLoader(TextureLoader, floorMap);
  // const [animationState, setAnimationState] = useState("standingUp");
  // const { xAxis, yAxis, zAxis } = useControls("skyBorg", {
  //   xAxis: { value: 0, min: -10, max: 10, step: 0.01 },
  //   yAxis: { value: 0, min: -10, max: 10, step: 0.01 },
  //   zAxis: { value: 0, min: -10, max: 10, step: 0.01 },
  // });
  // const { skyPostion } = useControls("sky", {

  // });
  // const { folioPostion } = useControls("folio", {
  //   xAxis: 0,
  //   yAixs: -2,
  //   zAxis: 0,
  // });

  const handleCurrentAnimation = (animType) => {
    setAnimationState(animType);
  };
  // useEffect(()=>{},[animationState]);

  const scene = useThree();
  const textScale = 1;
  // useGSAP(() => {
  //   if (skyRef.current.length) {
  //     gsap.from(
  //       skyRef.current.map((mesh) => mesh.position),
  //       {
  //         y: 3,
  //         duration: 2,
  //         ease: "elastic.out",
  //         stagger: 0.2,
  //       }
  //     );
  //   }
  //   if (folioRef.current.length) {
  //     gsap.from(
  //       folioRef.current.map((mesh) => mesh.position),
  //       {
  //         y: -4,
  //         duration: 2,
  //         ease: "elastic.out",
  //         stagger: 0.2,
  //       }
  //     );
  //   }
  // });


  useEffect(() => {
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(25, 25); // Adjust the repeat values as needed
    floorTexture.needsUpdate = true;
  }, [floorTexture]);

  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      {/* <Center position={[0, 2, 0]}>
        <group>
          {skyArr.map((alphabet, idx) => (
            <Text
              ref={(ele) => {
                return (skyRef.current[idx] = ele);
              }}
              key={alphabet + idx}
              alphabet={alphabet}
              position={[1.25 * idx, 0, 0]}
              textScale={textScale}
            />
          ))}
        </group>
      </Center>
      <Center position={[0, -2, 0]}>
        <group>
          {folioArr.map((alphabet, idx) => (
            <Text
              ref={(ele) => (folioRef.current[idx] = ele)}
              key={alphabet + idx}
              alphabet={alphabet}
              position={[idx === 1 || idx === 4 ? 1.1 * idx : 1.2 * idx, 0, 0]}
            />
          ))}
        </group>
      </Center> */}
     
      {/*  position={[skyBorg.xAxis, skyBorg.yAxis, skyBorg.zAxis]} */}
      <mesh rotation={[Math.PI * 0.5, 0, 0]}>
        <planeGeometry args={[1000, 1000, 20, 20]} />
        <meshStandardMaterial side={THREE.DoubleSide} map={floorTexture} />
      </mesh>
      {/* <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="orange" />
        <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} />
      </Clouds>
      <ambientLight intensity={2} /> */}
    </>
  );
};

export default Experience;
