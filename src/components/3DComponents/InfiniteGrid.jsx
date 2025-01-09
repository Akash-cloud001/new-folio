import { useRef, useState, useEffect } from "react";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import vertexShader from "../../glsl/PlaneShader/VertexShader.glsl";
import fragmentShader from "../../glsl/PlaneShader/FragmentShader.glsl";
import { useControls } from "leva";
import { Grid } from "@react-three/drei";

extend({ ShaderMaterial: THREE.ShaderMaterial });

const InfiniteGrid = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const totalHeight = useRef(0)
  
  useEffect(() => {
    const getPageHeight = () => {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    };
    totalHeight.current = getPageHeight();
    console.log(totalHeight.current)
    // const handleScroll = (event) => {
    //   setScrollOffset( window.scrollY * 0.001);
    // };

    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // useEffect(()=>{console.log(scrollOffset)},[scrollOffset])
  // const { x, y, z, rx, ry, rz } = useControls("leftSide", {
  //   x: { value: -6.4, min: -10, max: 10, step: 0.01 },
  //   y: { value: -0.50, min: -10, max: 10, step: 0.01 },
  //   z: { value: 0.56, min: -10, max: 10, step: 0.01 },
  //   rx: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  //   ry: { value: -1.4, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
  //   rz: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
  // });
  // const { gridSize, ...gridConfig } = useControls({
  //   x: { value: -6.4, min: -10, max: 10, step: 0.01 },
  //   y: { value: -0.50, min: -10, max: 10, step: 0.01 },
  //   z: { value: 0.56, min: -10, max: 10, step: 0.01 },
  //   gridSize: [10.5, 10.5],
  //   cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
  //   cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
  //   cellColor: '#6f6f6f',
  //   sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
  //   sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
  //   sectionColor: '#9d4b4b',
  //   fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
  //   fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
  //   followCamera: false,
  //   infiniteGrid: true
  // })
  return (
    <>
      <Grid position={[0, -0.01, 0]} args={[8,8]} cellSize={1} cellThickness={0.7} cellColor={'#6f6f6f'} sectionSize={8.2} sectionThickness={1.2} sectionColor={'#9d4b4b'} fadeDistance={11} fadeStrength={0.6} followCamera={true} infiniteGrid={true}/>
    </>
  );
};

const PlaneCom = ({ position, rotation }) => {
  const materialRef = useRef();
  
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[50, 10]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
        uniforms={{
          gridFrequency: { value: 50.0 },
          lineThickness: { value: 0.02 },
          gridColor: { value: new THREE.Color("#f2e8de") },
          backgroundColor: { value: new THREE.Color("#212") },
        }}
      />
    </mesh>
  );
};

export default InfiniteGrid;