import React, { forwardRef, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import VertexShader from "../../glsl/ImgShader/VertexShader.glsl";
import FragmentShader from "../../glsl/ImgShader/FragmentShader.glsl";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const ImageShader = forwardRef(({ textureSrc }, ref) => {
  const materialRef = useRef();
  const texture = useTexture("/akashInSnow.png");
  texture.generateMipmaps = true;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  texture.offset.x = 1;
  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });
  return (
    <mesh ref={ref}>
      <planeGeometry args={[8, 10, 16, 16]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={VertexShader}
        fragmentShader={FragmentShader}
        side={THREE.DoubleSide}
        uniforms={{
          uTime: { value: 0.0 },
          uTexture: { value: useTexture("/akashInSnow.png") },
        }}
        //   wireframe={true}
      />
    </mesh>
  );
});

export default ImageShader;
