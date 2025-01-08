import { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import vertexShader from "../../glsl/PlaneShader/VertexShader.glsl";
import fragmentShader from "../../glsl/PlaneShader/FragmentShader.glsl";
import { useControls } from "leva";

extend({ ShaderMaterial: THREE.ShaderMaterial });

const InfiniteGrid = () => {
  const {x, y, z, rx, ry, rz} = useControls('leftSide',{
    x: { value: -6.4, min: -10, max: 10, step: 0.01 },
    y: { value: .50, min: -10, max: 10, step: 0.01 },
    z: { value: .56, min: -10, max: 10, step: 0.01 },
    rx: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    ry: { value: 1.17, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
    rz: { value: -0.2, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
  })
  return (
    <>
      <PlaneCom position={[-6.4,-0.5,.60]} rotation={[0,1.17,0]} />
      <PlaneCom position={[6.4,-0.5,.60]} rotation={[0,-1.6,0]} />
    </>
  );
};


const PlaneCom = ({position, rotation})=>{
  return(
    <mesh position={position} rotation={rotation}>
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
  )
}

export default InfiniteGrid;
