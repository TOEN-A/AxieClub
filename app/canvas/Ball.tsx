import React, { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei'
import { useContext } from 'react'
import { SelectedOption } from '../axieinfinity/runes/components/runesList'

const Ball = ({
  url,
  scale,
  selected,
}: {
  url?: string
  scale: number
  selected: string
}) => {
  const [map] = useTexture([url || ''])

  const selectedClasses = useContext(SelectedOption)
  const materialColor = useMemo(
    () => (selectedClasses.includes(selected) ? '#66CDAA' : '#fff8eb'),
    [selectedClasses, selected]
  )

  return (
    <>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[0.05, 0.1, 0.05]} />
        <mesh castShadow receiveShadow scale={scale}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color={materialColor}
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            map={map}
          />
        </mesh>
      </Float>
    </>
  )
}

const BallCanvas = ({
  url,
  scale,
  selected,
}: {
  url?: string
  scale: number
  selected: string
}) => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} enablePan={false} />
      <Suspense>
        <Ball url={url} scale={scale} selected={selected} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default BallCanvas
