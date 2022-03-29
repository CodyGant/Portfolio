import React, {Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import Head from "../Fullbodymodel";

export default function Scene() {
  
  return (
    <>
    <Canvas >
      <ambientLight intensity={1} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[1, 1, 1]} castShadow />
      <Suspense fallback={null}>
        <Head />
      </Suspense>
</Canvas>

</>
  );
}