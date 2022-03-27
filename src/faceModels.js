import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei"; //importing library so i can use a custom glb
import { useFrame } from "@react-three/fiber"; //lets me create frames so glb can be animated
import { useGlobalState } from "./state/index"; //importing global states
//DEFAULT FACE MODEL
function DefualtModel({ ...props }) {
  //setting global statment
  let isAnimationrunning = useGlobalState("stopanimation");
  //setting HeadMesh to null
  let HeadMesh = null;
  //rotating animation
  const animation = useRef();
  useFrame(({ clock }) => {
    HeadMesh.current.rotation.y = Math.sin(clock.getElapsedTime());
  });

  //if statment to determin if model will rotate or be stagnate
  if (isAnimationrunning[0] === false) {
    HeadMesh = animation;
  } else {
  }
  //rendering the glb of my face
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
  render() {
    return <DefualtModel />;
  }
}
export default MyFace;
