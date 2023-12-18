import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import Globe from "@/components/Globe";
import { OrbitControls, ambientLight } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react'; 



function CameraSetup() {
    const { camera, size } = useThree();
  
    useEffect(() => {
      // Set the camera position
      camera.position.set(100, 70, 50); // Adjust as needed for your scene
      
      // Look at the origin (or any other point you want to focus on)
      camera.lookAt(0, 0, 0); // Adjust as needed for your scene
      
      // Adjust FOV for a "zoom" effect
      camera.fov = 10; // Smaller number for more "zoom", larger for less
      
      // Update the camera aspect ratio and projection matrix
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
  
    }, [camera, size.width, size.height]);
  

  return null;
}



function GlobeCanvas() {
    return (
        <>
            <Canvas shadows> 
                <Suspense fallback={null}>
                    <CameraSetup />
                    <directionalLight
                        position={[1, 0, 0]} 
                        intensity={1}        
                        castShadow           
                    />
                    <directionalLight
                        position={[-1, 0, 0]} 
                        intensity={1}         
                        castShadow            
                    />
                    <directionalLight
                        position={[0, 1, 0]} 
                        intensity={1}         
                        castShadow
                    />
                    <ambientLight 
                        intensity={2}

                        // setRotationFromAxisAngle={0.7}
                        // penumbra={1}
                        // position={[10, 15, 10]}
                        castShadow={true}
                    />
                    <Globe/>
                    <OrbitControls 
                        enablePan={true} 
                        enableZoom={false}
                        enableRotate={true}
                    />
                </Suspense>
            </Canvas>
        
        </>
    )
}

export default GlobeCanvas;