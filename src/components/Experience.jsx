import { Center, OrbitControls } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useControls } from "leva";

import Text from "./3DComponents/Text";
import Skyborg from "./3DComponents/Skyborg";
const Experience = () => {
  const skyArr = ["S", "K", "Y"];
  const folioArr = ["F", "O", "L", "I", "O"];
  const skyRef = useRef([]);
  const folioRef = useRef([]);

  const [animationState, setAnimationState] = useState("standingUp");

  // const { skyPostion } = useControls("sky", {

  // });
  // const { folioPostion } = useControls("folio", {
  //   xAxis: 0,
  //   yAixs: -2,
  //   zAxis: 0,
  // });
  const { xAxis, yAxis, zAxis } = useControls("skyBorg", {
    xAxis: { value: 0, min: -10, max: 10, step: 0.01 },
    yAixs: { value: 0, min: -10, max: 10, step: 0.01 },
    zAxis: { value: 0, min: -10, max: 10, step: 0.01 },
  });

  const handleCurrentAnimation = (animType) => {
    setAnimationState(animType);
  };
  // useEffect(()=>{},[animationState]);

  const scene = useThree();
  const textScale = 1;
  console.log(textScale);
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

  return (
    <>
      <OrbitControls makeDefault/>
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
      <Center>
        <Skyborg
          animationState={animationState}
          scale={2}
          position-x={xAxis}
          position-y={yAxis}
          position-z={zAxis}
        />
      </Center>
      {/*  position={[skyBorg.xAxis, skyBorg.yAxis, skyBorg.zAxis]} */}
      <ambientLight intensity={2} />
    </>
  );
};

export default Experience;
