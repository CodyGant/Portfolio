import React, {Suspense} from 'react'
import { Canvas} from "@react-three/fiber";
import Head from "../Fullbodymodel";

export default function Scene() {
  
  return (
    <>
    <Canvas camera={{ zoom: 50, position: [350, 10, 100] }} >
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.5} angle={0.1} penumbra={2} position={[1, 1, 1]} castShadow />
      <Suspense fallback={null}>
        <Head />
      </Suspense>
</Canvas>

</>
  );
}
