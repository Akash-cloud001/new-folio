import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
const Hero = () => {
  return (
    <Canvas>
        <Suspense fallback={null}>
            <Experience />
        </Suspense>
    </Canvas>
  )
}

export default Hero;
