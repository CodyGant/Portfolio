import React, {Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import Head from "../faceModels";

export default function Scene() {
  
  return (
    <>
    <Canvas style={{ background: "#171717" }}>
      <ambientLight intensity={1} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense fallback={null}>
        <Head />
      </Suspense>
</Canvas>

</>
  );
}