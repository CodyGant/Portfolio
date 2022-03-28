import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei"; //importing library so i can use a custom glb
import { useFrame } from "@react-three/fiber"; //lets me create frames so glb can be animated
import { useGlobalState } from "./state/index"; //importing global states
//DEFAULT FACE MODEL

function DefualtModel({ ...props }) {
  //setting global statment
  useGlobalState("stopanimation", "sideprofile");
  const isAnimationrunning = useGlobalState("stopanimation");

  const leftprofile = useGlobalState("sideprofile")
  //setting HeadMesh to null
  let HeadMesh = useRef();

  //grabbing the right glb
  const { nodes, materials } = useGLTF("/finalme.glb");

  //rotating animation
  function Animate(){
    useFrame(({ clock }) => {
      HeadMesh.current.rotation.y =clock.getElapsedTime();
    });
  }
  //stops animation
  function StopAnimate(){
    useFrame(() => {
      HeadMesh.current.rotation.y =5.5;
      
      HeadMesh.current.position.x = 0;
    });
  }
  function Leftprofile(){
    useFrame(() => {
      HeadMesh.current.rotation.y =4.2;
      HeadMesh.current.position.x = 0;
    });
  }
  

  //when global variable 'stopanimation' is set to false
  function AnimationRunning(){
  if (isAnimationrunning[0] === false) {
    Animate()
   
    //when global variable 'stopanimation' is set to true
  } else{
    StopAnimate()
  }
}AnimationRunning()
  

  if (leftprofile[0] === true){
    Leftprofile()
  }else{
    AnimationRunning()
  }
  //rendering the glb of my face
  return (
    <group ref={HeadMesh} {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
        scale={[10.16, 14.57, 10.81]}
        position={[0, 0, 0]}
        rotation={[0, 1, 0]}
      />
    </group>
  );
}
useGLTF.preload("/finalme.glb");

class MyFace extends React.Component {
  render() {
    return <DefualtModel />;
  }
}
export default MyFace;
