import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Model({ ...props }) {
   let  animation = useRef();
  useFrame(({ clock }) => {
    HeadMesh.current.rotation.y = clock.getElapsedTime();
  });

  let HeadMesh = animation;
  const group = useRef();
  const { nodes, materials } = useGLTF("/myfacebig.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        ref={HeadMesh}
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
        position={[0, 0.25, 0]}
        rotation={[0, 1.43, 0]}
      />
    </group>
  );
}

useGLTF.preload("/myfacebig.glb");







class MyFace extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  
  render() 
  
  {
    return (
      <Model/>
    );
  }
}
export default MyFace