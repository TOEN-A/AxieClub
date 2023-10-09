'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, PresentationControls } from '@react-three/drei'

const RuneInfo = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="blue" position={[3, 5, 5]} />
      <PresentationControls
        global
        config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={1.5}>
          <mesh scale={[7, 6, 0.1]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Float>
      </PresentationControls>
    </Canvas>
  )
}

export default RuneInfo
