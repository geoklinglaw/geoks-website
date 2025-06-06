" use client";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import React, { useRef, useEffect } from "react";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
// import scene from '../../public/models/planet_earth/scene.gltf';
import UseAnimations from "react-useanimations";

function Globe(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/planet_earth/scene.gltf"
  );
  const { actions } = useAnimations(animations, group);

  const initialPositionX = 1;
  const initialPositionY = 0.5;
  const initialPositionZ = 0;

  return (
    <group
      ref={group}
      {...props}
      position={[initialPositionX, initialPositionY, initialPositionZ]}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="578a67fb859c4432ad395a9d408af1e7fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Earth"
                  rotation={[-Math.PI / 2, 0, 0.681]}
                  scale={358.622}
                >
                  <group
                    name="Earth_Details"
                    position={[0.163, -0.812, 0.592]}
                    rotation={[-0.525, -0.789, -2.962]}
                    scale={[0.006, 0.006, 0.009]}
                  >
                    <mesh
                      name="Earth_Details_Wood_0"
                      geometry={nodes.Earth_Details_Wood_0.geometry}
                      material={materials.Wood}
                    />
                    <mesh
                      name="Earth_Details_Tree_0"
                      geometry={nodes.Earth_Details_Tree_0.geometry}
                      material={materials.Tree}
                    />
                    <mesh
                      name="Earth_Details_Tree_0_1"
                      geometry={nodes.Earth_Details_Tree_0_1.geometry}
                      material={materials.Tree}
                    />
                    <mesh
                      name="Earth_Details_Ice_0"
                      geometry={nodes.Earth_Details_Ice_0.geometry}
                      material={materials.material}
                    />
                    <mesh
                      name="Earth_Details_Blue_0"
                      geometry={nodes.Earth_Details_Blue_0.geometry}
                      material={materials.Blue}
                    />
                    <mesh
                      name="Earth_Details_Sand_0"
                      geometry={nodes.Earth_Details_Sand_0.geometry}
                      material={materials.Sand}
                    />
                    <mesh
                      name="Earth_Details_red_0"
                      geometry={nodes.Earth_Details_red_0.geometry}
                      material={materials.material_7}
                    />
                  </group>
                  <group
                    name="Clouds_and_Stars"
                    position={[-0.577, -0.085, 0.844]}
                    rotation={[-1.555, -0.135, 2.627]}
                    scale={0.042}
                  >
                    <mesh
                      name="Clouds_and_Stars_Ice_0"
                      geometry={nodes.Clouds_and_Stars_Ice_0.geometry}
                      material={materials.material}
                    />
                    {/* <mesh name="Clouds_and_Stars_Star_0" geometry={nodes.Clouds_and_Stars_Star_0.geometry} material={materials.Star} /> */}
                  </group>
                  <mesh
                    name="Earth_Ice_0"
                    geometry={nodes.Earth_Ice_0.geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="Earth_Water_0"
                    geometry={nodes.Earth_Water_0.geometry}
                    material={materials.Water}
                  />
                  <mesh
                    name="Earth_Sand_0"
                    geometry={nodes.Earth_Sand_0.geometry}
                    material={materials.Sand}
                    material-color={"#FBA312"}
                  />
                  <mesh
                    name="Earth_Grass_0"
                    geometry={nodes.Earth_Grass_0.geometry}
                    material={materials.Grass}
                  />
                  {/* material-color={"#FFFFFF"} */}
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Globe;

// import { useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three';
// import React, { useRef, useEffect } from 'react';
// import {OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
// // import scene from '../../public/models/planet_earth/scene.gltf';
// import UseAnimations from "react-useanimations";

// function Globe(props) {
//   const { nodes, materials } = useGLTF('/models/earth/scene.gltf');
//   const blinn1BaseColor = useLoader(TextureLoader, '/models/earth/textures/blinn1_baseColor.png');
//   const blinn1MetallicRoughness = useLoader(TextureLoader, '/models/earth/textures/blinn1_metallicRoughness.png');

//   materials.blinn1.map = blinn1BaseColor;
//   materials.blinn1.metallicRoughnessMap = blinn1MetallicRoughness;

//   return (
//         <group {...props} dispose={null}>
//         <mesh geometry={nodes.earth4_blinn1_0.geometry} material={materials.blinn1} />
//         <mesh geometry={nodes.earth4_lambert1_0.geometry} material={materials.lambert1} />
//         </group>
//   );
// }

// export default Globe;
