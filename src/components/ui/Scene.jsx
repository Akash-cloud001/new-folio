import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import SkyborgTyping from "../3DComponents/SkyborgTyping";
import { useControls } from "leva";
import * as THREE from "three";
import { Center, useVideoTexture } from "@react-three/drei";
import FragmentShader from "../../glsl/FragmentShader.glsl";
import VertexShader from "../../glsl/VertexShader.glsl";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const coderRef = useRef();
  const skyborgRef = useRef();
  const customRef = useRef();
  const [scaleFac, setScaleFac] = useState(1);
  const videoTexture = useVideoTexture("/mVideo.mp4", {
    onUpdate: () => {
      setTexture(videoTexture);
      videoTexture.minFilter = THREE.LinearFilter; // For better quality
      videoTexture.magFilter = THREE.LinearFilter; // For better quality
      videoTexture.generateMipmaps = true; // Use mipmaps if you scale the texture
    },
    muted: true,
    autoplay: true,
    loop: true,
    crossOrigin: "anonymous",
    playsInline: true,
  });
  videoTexture.wrapS = THREE.RepeatWrapping;
  videoTexture.wrapT = THREE.RepeatWrapping;
  videoTexture.repeat.x = -1;
  videoTexture.offset.x = 1;

  // Update shader material's uniform when texture changes
  useEffect(() => {
    if (customRef.current && videoTexture) {
      customRef.current.material.uniforms.uTexture.value = videoTexture;
      const videoElement = videoTexture.image;
      videoElement.play();
    }

    const handleCoderScale = ()=>{
      const screenWidth = window.innerWidth;

      if(screenWidth >= 900){
        setScaleFac(1)
      }
      else if(screenWidth >=768){
        setScaleFac(0.8)
      }
      else if(screenWidth >= 640){
        setScaleFac(0.7)
        skyborgRef.current.position.x = 1.35;
      }
      else{
        setScaleFac(0.7)
        skyborgRef.current.position.x = 2;
        customRef.current.position.x = 0;

      }

    }

    window.addEventListener('resize', handleCoderScale)
    handleCoderScale();
    return(()=>{
      window.removeEventListener('resize', handleCoderScale)
    })
  }, [videoTexture]);

  
  useFrame((state, delta) => {
    if (customRef.current && customRef.current.material) {
      customRef.current.material.uniforms.uTime.value += delta;
    }
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
      <group ref={coderRef} scale={scaleFac}>
        <SkyborgTyping
          ref={skyborgRef}
          scale={2}
          position={[1.35, -2.32, 2.27]}
          rotation={[0, -2.42, 0]}
        />
        <mesh
          ref={customRef}
          rotation={[0, -2.32, 0]}
          position={[-0.75, 0.37, 0.19]}
        >
          <planeGeometry args={[4, 2.5, 64, 64]} />
          <shaderMaterial
            vertexShader={VertexShader}
            fragmentShader={FragmentShader}
            wireframe={true}
            side={THREE.DoubleSide}
            uniforms={{
              uBendFactor: { value: 0.2 },
              uFreq: { value: new THREE.Vector2(7, 5) },
              uTime: { value: 0 },
              uTexture: videoTexture,
            }}
          />
        </mesh>
      </group>
    </>
  );
};

export default Scene;
