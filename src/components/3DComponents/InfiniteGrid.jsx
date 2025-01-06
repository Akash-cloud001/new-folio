import { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import vertexShader from "../../glsl/PlaneShader/VertexShader.glsl";
import fragmentShader from "../../glsl/PlaneShader/FragmentShader.glsl";

extend({ ShaderMaterial: THREE.ShaderMaterial });

const InfiniteGrid = () => {
//   const gridMaterial = new ShaderMaterial({
//     vertexShader,
//     fragmentShader,
//     transparent: true,
//     uniforms: {
//       gridFrequency: { value: 10.0 },
//       lineThickness: { value: 0.05 },
//       gridColor: { value: new Color(1, 1, 1) }, // White
//       backgroundColor: { value: new Color(0, 0, 0) }, // Black
//     },
//   });

  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
        uniforms={{
            gridFrequency: { value: 15.0 },
            lineThickness: { value: 0.02 },
            gridColor: { value: new THREE.Color('#f2e8de') }, // White
            backgroundColor: { value: new THREE.Color('#212') }, // Black
        }}
      />
    </mesh>
  );
};

export default InfiniteGrid;
