import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import Ufo from "@/components/Ufo";
import { OrbitControls, ambientLight } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react'; 



function CameraSetup() {
    const { camera, size } = useThree();
  
    useEffect(() => {
      camera.position.set(100, 0, 0); 
      camera.lookAt(0, 0, 0); 
      camera.aspect = size.width / size.height;
      camera.far = 10000000;
      camera.updateProjectionMatrix();
  
    }, [camera, size.width, size.height]);
  

  return null;
}



function UfoCanvas() {
    return (
        <>
            <Canvas shadows> 
                <Suspense fallback={null}>
                    {/* <CameraSetup /> */}
                    <directionalLight
                        position={[-1, -1, 0]} 
                        intensity={1}        
                        castShadow           
                    />
                    <directionalLight
                        position={[1, 1, 0]} 
                        intensity={1}         
                        castShadow            
                    />
                    <directionalLight
                        position={[0, 1, 0]} 
                        intensity={1.5}         
                        castShadow
                    />
                    <ambientLight 
                        intensity={1}
                    />
                    <Ufo/>
                    <OrbitControls 
                        enablePan={true} 
                        enableZoom={false}
                        enableRotate={false}
                        enalbleDamping={false}
                    />
                </Suspense>
            </Canvas>
        
        </>
    )
}

export default UfoCanvas;