import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';

import '../App.css'

const Hero = () => {
  return (
    <section className='hero-container'>
      <Canvas>
          <Suspense fallback={null}>
              <Experience />
          </Suspense>
      </Canvas>
    </section>
  )
}

export default Hero;
