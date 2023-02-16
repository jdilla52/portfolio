import {Canvas} from '@react-three/fiber';
import {, useRef} from 'react';
import {OrbitControls, Preload} from '@react-three/drei'

const Cube = () => {
    const mesh = useRef();

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshBasicMaterial color={0x880808}/>
        </mesh>
    );
};

export default function Scene(props: any) {
    // Everything defined in here will persist between route changes, only children are swapped
    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-stone-300">

            <Canvas {...props}>
                <directionalLight intensity={0.75}/>
                <ambientLight intensity={0.75}/>
                <Cube/>
                <Preload all/>
                <OrbitControls/>
            </Canvas>
        </div>
    )
}