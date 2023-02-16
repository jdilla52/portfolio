import {Canvas} from '@react-three/fiber';
import {useRef, useMemo} from 'react';
import {OrbitControls, Preload} from '@react-three/drei'


const vertexShader = `
uniform float u_test;

varying vec2 vUv;

void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
`
const fragmentShader = `
uniform float u_test;


varying vec2 vUv;

vec3 colorA = vec3(0.912,0.191,0.652);
vec3 colorB = vec3(1.000,0.777,0.052);

void main() {
  // "Normalizing" with an arbitrary value
  // We'll see a cleaner technique later :)   
  vec2 normalizedPixel = gl_FragCoord.xy/600.0;
  vec3 color = mix(colorA, colorB, normalizedPixel.x);

  gl_FragColor = vec4(color,1.0);
}

`

const Cube = () => {
    const mesh = useRef();
    const uniforms = useMemo(
        () => ({
            u_test: {
                value: 1.0,
            },
        }),
        []
    );
    return (
        <mesh ref={mesh} position={[0, 0, 0]} scale={1.0}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

export default function Scene(props: any) {
    // Everything defined in here will persist between route changes, only children are swapped
    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-stone-300">

            <Canvas {...props} camera={{ position: [0.0, 0.0, 0.5]}}>
                <directionalLight intensity={0.75}/>
                <ambientLight intensity={0.75}/>
                <Cube/>
                <Preload all/>
                <OrbitControls/>
            </Canvas>
        </div>
    )
}