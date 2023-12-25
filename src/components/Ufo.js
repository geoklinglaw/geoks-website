// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'




// function Ufo(props) {
//   const { nodes, materials } = useGLTF('/models/ufo/scene.gltf')

  
//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[0, 0, -Math.PI]} scale={[-2, 0.484, 2]}>
//         <mesh geometry={nodes.Object_4.geometry} material={materials.Body} />
//         <mesh geometry={nodes.Object_5.geometry} material={materials.Glass} />
//         <mesh geometry={nodes.Object_6.geometry} material={materials['Dome.belt']} material-color={"#00C6C3"} />
//         <mesh geometry={nodes.Object_7.geometry} material={materials.Bottom} />
//         <mesh geometry={nodes.Object_8.geometry} material={materials['Glass.mini']} />
//         <mesh geometry={nodes.Object_9.geometry} material={materials['Bottom.001']} material-color={"#00C6C3"} />
//       </group>
//     </group>
//   )
// }

// // useGLTF.preload('/scene.gltf')

// export default Ufo;


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'




function Ufo(props) {
    const { nodes, materials } = useGLTF('/models/ufo1/scene.gltf')
    return (
      <group {...props} dispose={null} >
        <group position={[0, -5, -8.5]} scale={0.02}>
            <group position={[0, 180.111, 212.613]} rotation={[-Math.PI / 2, 0, 0]} scale={152.757}>
            <mesh geometry={nodes.Cylinder007_M9L_0.geometry} material={materials.material} position={[0, 0, -0.083]} />
            </group>
            <group position={[0, 266.408, 212.613]} rotation={[-Math.PI / 2, 0, 0]} scale={152.757}>
            <mesh geometry={nodes.Object017_M7_0.geometry} material={materials.material_1} position={[0, 0, -0.648]} />
            </group>
            <group position={[0, 261.706, 212.613]} rotation={[-Math.PI / 2, 0, 0]} scale={152.757}>
            <mesh geometry={nodes.Object018_M2_0.geometry} material={materials.material_2} position={[0, 0, -0.618]} />
            </group>
            {/* <group position={[0, 67.344, 212.613]} rotation={[-Math.PI / 2, 0, 0]} scale={152.757}>
            <mesh geometry={nodes.Object019_M1_0.geometry} material={materials.material_3} position={[0, 0, 0.655]} />
            </group> */}
            <group position={[0, 225.082, 211.439]} rotation={[-Math.PI / 2, 0, 0]} scale={152.757}>
            <mesh geometry={nodes.Object020_M1_0.geometry} material={materials.material_3} position={[0, -0.008, -0.378]} />
            </group>
            <group position={[0, 116.765, 211.714]} rotation={[-Math.PI / 2, 0, 0]} scale={152.757}>
            <mesh geometry={nodes.Object021_M9L_0.geometry} material={materials.material} position={[0, -0.006, 0.331]} />
            </group>
            {/* <group position={[0, 49.407, 212.613]} rotation={[-Math.PI / 2, 0, 0]} scale={152.757}>
            <mesh geometry={nodes.Object022_M3_0.geometry} material={materials.material_4} position={[0, 0, 0.772]} />
            </group> */}
        </group>
      </group>
    )
}

// useGLTF.preload('/scene.gltf')

export default Ufo;