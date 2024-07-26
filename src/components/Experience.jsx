import {
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import fontFamily from "../assets/fonts/Titan-One_Regular.json";
import texture from "../assets/textures/4.png";
import { useTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import {gsap} from 'gsap'

import Text from "./3DComponents/Text";

const Experience = () => {
  const matTexture = useTexture(texture);
//   const skyRef = useRef();
//   console.log(skyRef.current)
//   useGSAP(()=>{
//     gsap.from(skyRef.current.position, {
//         y: 2,
//         duration:3,
//         ease: "elastic.out"
//     });
   
//   })
    const skyArr = ['S', 'K', 'Y'];
  return (
    <>
      <OrbitControls />
      <Center position={[-1, 2, 0]}>
        <group>
            {skyArr.map((alphabet,idx)=>(
                <Text key={alphabet+idx} alphabet={alphabet} position={[1.25*idx, 0,0]}/>
            ))}
        </group>
        {/* <Text3D
          ref={skyRef}
          font={fontFamily}
          size={1.2}
          height={0.4}
          curveSegments={36}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={1}
        >
          SKY
          <meshMatcapMaterial matcap={matTexture} />
        </Text3D> */}
        <Text alphabet={'S'}/>
      </Center>
      <Center position={[1, -2, 0]}>
        <Text3D
          font={fontFamily}
          size={1.2}
          height={0.4}
          curveSegments={36}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={1}
        >
          FOLIO
          <meshMatcapMaterial matcap={matTexture} />
        </Text3D>
      </Center>

      <ambientLight intensity={1} />
    </>
  );
};

export default Experience;
