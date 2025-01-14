import { useRef, useState, useEffect } from "react";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";
import { Grid } from "@react-three/drei";

extend({ ShaderMaterial: THREE.ShaderMaterial });

const InfiniteGrid = ({scrollPosition }) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const gridMovement = scrollPosition * 2; 

  // const { x, y, z, rx, ry, rz, gridSize, ...gridConfig } = useControls({
  //   x: { value: 16, min: -20, max: 20, step: 0.001 },
  //   y: { value: -7.3, min: -10, max: 10, step: 0.001 },
  //   z: { value: 1.56, min: -10, max: 10, step: 0.001 },
  //   rx: { value: -1, min: -Math.PI * 2, max: Math.PI * 2, step: 0.0001 },
  //   ry: { value: 0.48, min: -Math.PI * 2, max: Math.PI * 2, step: 0.0001 },
  //   rz: { value: 0.60, min: -Math.PI * 2, max: Math.PI * 2, step: 0.0001 },
  //   gridSize: [10.5, 10.5],
  //   cellSize: { value: 2.2, min: 0, max: 10, step: 0.1 },
  //   cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
  //   cellColor: "#6f6f6f",
  //   sectionSize: { value: 7.9, min: 0, max: 10, step: 0.1 },
  //   sectionThickness: { value: 1.2, min: 0, max: 5, step: 0.1 },
  //   sectionColor: "#9d4b4b",
  //   fadeDistance: { value: 36, min: 0, max: 100, step: 1 },
  //   fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
  //   followCamera: false,
  //   infiniteGrid: true,
  // });
  return (
    <>
      <Grid
        rotation={[0.7, 0.0, -0.9]}
        position={[-8,gridMovement, 0]}
        args={[10.5, 10.5]}
        cellSize={2.2}
        cellThickness={1}
        cellColor={"#6f6f6f"}
        sectionSize={7.9}
        sectionThickness={1.2}
        sectionColor={"#9d4b4b"}
        fadeDistance={34}
        fadeStrength={1}
        followCamera={true}
        infiniteGrid={true}
      />
      <Grid
        rotation={[-0.7, 0.0, 0.9]} // Adjusted rotation
        position={[8, gridMovement, 0]} // Adjusted position for bottom right corner
        args={[10.5, 10.5]}
        cellSize={2.2}
        cellThickness={1}
        cellColor={"#6f6f6f"}
        sectionSize={7.9}
        sectionThickness={1.2}
        sectionColor={"#9d4b4b"}
        fadeDistance={34}
        fadeStrength={1}
        followCamera={true}
        infiniteGrid={true}
      />
    </>
  );
};

