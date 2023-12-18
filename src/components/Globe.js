// " use client";

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
import ReactGlobe from 'react-globe';

function Globe() {
    return (
        <>
        <ReactGlobe />
        </>
    );
}

export default Globe;