import React, { useEffect, useRef, useState } from "react";
import {
  useGLTF,
  useScroll,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
const MacContainer = (props) => {
  const macRef = useRef(null);
  const [yPos, setYPos] = useState(-13);

  let model = useGLTF("./mac.glb");
//   let videoText = useVideoTexture("./video.mp4");
//   let texture = useTexture("./wallpaper.png");

  let meshes = {};
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });
  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
//   meshes.matte.material.map = videoText;
  
//   videoText.image.pause();
//   videoText.image.muted = false;
//   videoText.image.playsInline = true;
//   videoText.image.webkitPlaysInline = true;
//   meshes.matte.material.emissiveIntensity = 0;
//   meshes.matte.material.roughness = 0;
//   meshes.matte.material.metalness = 1;
  let scroll = useScroll();

  useFrame((state, delta) => {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(
      180 - scroll.offset * 90
    );
    // console.log(meshes.matte.material.roughness)
    meshes.matte.material.roughness = scroll.offset;
  });


  useEffect(() => {
    if (macRef.current) {
      console.log(macRef.current);
      switch (props.resize) {
        case "small":
          macRef.current.scale.x = 0.5;
          macRef.current.scale.y = 0.5;
          macRef.current.scale.z = 0.5;
          setYPos(-8);
          break;
        case "medium":
          macRef.current.scale.x = 0.75;
          macRef.current.scale.y = 0.75;
          macRef.current.scale.z = 0.75;
          setYPos(-10);
          break;
        case "large":
          macRef.current.scale.x = 1;
          macRef.current.scale.y = 1;
          macRef.current.scale.z = 1;
          setYPos(-13);
          break;
        default:
          break;
      }
    }
  }, [props.resize]);

  return (
    <group
      ref={macRef}
      position={[0, yPos, 0]}
      rotation={[Math.PI * -0.035, 0, 0]}
    >
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
