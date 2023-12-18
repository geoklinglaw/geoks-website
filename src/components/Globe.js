" use client";

// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import '../styles/globe.css'; // Make sure the path to your CSS is correct

// function Globe() {
//     const containerRef = useRef();

//     useEffect(() => {
//         // Scene setup
//         const scene = new THREE.Scene();

//         // Camera setup
//         const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
//         camera.position.set(1380, -17, 394);

//         // Renderer setup
//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         containerRef.current.appendChild(renderer.domElement);

//         // Light setup
//         const light = new THREE.SpotLight(0xFFFFFF, 1);
//         light.position.set(4000, 4000, 1500);
//         scene.add(light);

//         // Earth geometry and material
//         const earthGeometry = new THREE.SphereGeometry(200, 400, 400);
//         const earthMaterial = new THREE.MeshPhongMaterial({
//             map: new THREE.TextureLoader().load('earthmap.jpg'), // Replace with your texture path
//             bumpMap: new THREE.TextureLoader().load('bump-map.jpg'), // Replace with your texture path
//             bumpScale: 8,
//             specularMap: new THREE.TextureLoader().load('earthspec1k.jpg'), // Replace with your texture path
//             specular: new THREE.Color('#2e2e2e')
//         });
//         const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
//         earthMesh.position.set(-100, 0, 0);
//         earthMesh.rotation.y = 5;
//         scene.add(earthMesh);

//         // Controls setup
//         const controls = new OrbitControls(camera, renderer.domElement);
//         controls.addEventListener('change', () => renderer.render(scene, camera));

//         // Animation loop
//         function animate() {
//             requestAnimationFrame(animate);
//             controls.update();
//             renderer.render(scene, camera);
//         }

//         animate();

//         // Clean up
//         return () => {
//             containerRef.current.removeChild(renderer.domElement);
//         };
//     }, []);

//     return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
// }

// export default Globe;

import React, { useRef, useEffect } from 'react';
import {OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
// import scene from '../../public/models/planet_earth/scene.gltf';
import UseAnimations from "react-useanimations";

function Globe(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/planet_earth/scene.gltf');
    const { actions } = useAnimations(animations, group)

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
            <group name="578a67fb859c4432ad395a9d408af1e7fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Earth" rotation={[-Math.PI / 2, 0, 0.681]} scale={358.622}>
                    <group name="Earth_Details" position={[0.163, -0.812, 0.592]} rotation={[-0.525, -0.789, -2.962]} scale={[0.006, 0.006, 0.009]}>
                      <mesh name="Earth_Details_Wood_0" geometry={nodes.Earth_Details_Wood_0.geometry} material={materials.Wood} />
                      <mesh name="Earth_Details_Tree_0" geometry={nodes.Earth_Details_Tree_0.geometry} material={materials.Tree} />
                      <mesh name="Earth_Details_Tree_0_1" geometry={nodes.Earth_Details_Tree_0_1.geometry} material={materials.Tree} />
                      <mesh name="Earth_Details_Ice_0" geometry={nodes.Earth_Details_Ice_0.geometry} material={materials.material} />
                      <mesh name="Earth_Details_Blue_0" geometry={nodes.Earth_Details_Blue_0.geometry} material={materials.Blue} />
                      <mesh name="Earth_Details_Sand_0" geometry={nodes.Earth_Details_Sand_0.geometry} material={materials.Sand} />
                      <mesh name="Earth_Details_red_0" geometry={nodes.Earth_Details_red_0.geometry} material={materials.material_7} />
                    </group>
                    <group name="Clouds_and_Stars" position={[-0.577, -0.085, 0.844]} rotation={[-1.555, -0.135, 2.627]} scale={0.042}>
                      <mesh name="Clouds_and_Stars_Ice_0" geometry={nodes.Clouds_and_Stars_Ice_0.geometry} material={materials.material} />
                      {/* <mesh name="Clouds_and_Stars_Star_0" geometry={nodes.Clouds_and_Stars_Star_0.geometry} material={materials.Star} /> */}
                    </group>
                    <mesh name="Earth_Ice_0" geometry={nodes.Earth_Ice_0.geometry} material={materials.material} /> 
                    <mesh name="Earth_Water_0" geometry={nodes.Earth_Water_0.geometry} material={materials.Water} />
                    <mesh name="Earth_Sand_0" geometry={nodes.Earth_Sand_0.geometry} material={materials.Sand} />
                    <mesh name="Earth_Grass_0" geometry={nodes.Earth_Grass_0.geometry} material={materials.Grass}  />
                    {/* material-color={"#FFFFFF"} */}
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    )
}


export default Globe;