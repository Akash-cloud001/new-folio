import React from 'react'

const CurvedPlane = () => {
  return (
    <>
      <mesh
          ref={customRef}
          rotation={[0, -2.42, 0]}
          position={[-0.75, 0.37, 0.19]}
        >
          <planeGeometry args={[4, 2.5, 32, 32]} />
          <shaderMaterial
            vertexShader={VertexShader}
            fragmentShader={FragmentShader}
            wireframe={false}
            side={THREE.DoubleSide}
            uniforms={{
              uBendFactor: { value: 0.2 },
              uFreq: { value: new THREE.Vector2(5, 10) },
              uTime: { value: 0 },
              uTexture: videoTexture,
            }}
          />
        </mesh>
    </>
  )
}

export default CurvedPlane;