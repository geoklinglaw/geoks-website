import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import Globe from "@/components/Globe";
import { OrbitControls, ambientLight } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react'; 



function CameraSetup() {
    const { camera, size } = useThree();
  
    useEffect(() => {
      camera.position.set(100, 70, 50); 
      camera.lookAt(0, 0, 0); 
      camera.fov = 10; 
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
  
    }, [camera, size.width, size.height]);
  

  return null;
}



function GlobeCanvas() {
    return (
        <>
            <Canvas> 
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
                    />
                    <Globe/>
                    <OrbitControls 
                        enablePan={true} 
                        enableZoom={false}
                        enableRotate={true}
                        autoRotate={true}
                    />
                </Suspense>
            </Canvas>
        
        </>
    )
}

export default GlobeCanvas;