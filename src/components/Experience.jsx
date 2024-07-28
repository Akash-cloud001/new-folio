import {
  Center,
  OrbitControls,
} from "@react-three/drei";
import React, { useRef } from "react";
import texture from "../assets/textures/4.png";
import { useTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import Text from "./3DComponents/Text";

const Experience = () => {
  const skyArr = ["S", "K", "Y"];
  const folioArr = ["F", "O", "L", "I", "O"];
  const skyRef = useRef([]);
  const folioRef = useRef([]);

  const matTexture = useTexture(texture);
  useGSAP(() => {
    if (skyRef.current.length) {
      gsap.from(
        skyRef.current.map((mesh) => mesh.position),
        {
          y: 2,
          duration: 2,
          ease: "elastic.out",
          stagger: 0.2,
        }
      );
    }
    if(folioRef.current.length){
      gsap.from(
        folioRef.current.map((mesh) => mesh.position),
        {
          y: -4,
          duration: 2,
          ease: "elastic.out",
          stagger: 0.2,
        }
      );
    }
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <Center position={[-2, 2, 0]}>
        <group>
          {skyArr.map((alphabet, idx) => (
            <Text
              ref={(ele) => {
                return (skyRef.current[idx] = ele);
              }}
              key={alphabet + idx}
              alphabet={alphabet}
              position={[1.25 * idx, 0, 0]}
            />
          ))}
        </group>
      </Center>
      <Center position={[2, -2, 0]}>
        <group>
          {folioArr.map((alphabet, idx)=>
            <Text 
              ref={ele=>folioRef.current[idx]=ele}
              key={alphabet + idx}
              alphabet={alphabet}
              position={[idx===1||idx===4? 1.1* idx : 1.2 * idx , 0, 0]}
            />
          )}
        </group>
      </Center>

      <ambientLight intensity={1} />
    </>
  );
};

export default Experience;
