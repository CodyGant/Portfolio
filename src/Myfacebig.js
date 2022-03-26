
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'; 

export default function Model({ ...props }) {

  const HeadMesh = useRef()
   useFrame(({ clock }) => { 
     HeadMesh.current.rotation.y = clock.getElapsedTime(); 
      }) 
  const group = useRef()
  const { nodes, materials } = useGLTF('/myfacebig.glb')
  
  
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh ref={HeadMesh}  geometry={nodes.Mesh_0.geometry} material={materials.Material_0} position={[0, 0.25, 0]} rotation={[0, 1.43, 0]} />
    </group>
  )
}
function Stop(){
  const HeadMesh = useRef()
  useFrame(({ clock }) => { 
    HeadMesh.current.rotation = clock.getElapsedTime(); 
     }) 
     
}



useGLTF.preload('/myfacebig.glb')
