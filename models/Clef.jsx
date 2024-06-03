import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Clef = (props) => {
    const group = useRef();

    const { nodes, materials } = useGLTF('/models/Clef5.glb');
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('models/web_661.webp', 
        () => console.log("Texture loaded successfully"),
        undefined,
        (error) => console.error("Failed to load texture:", error)
    );

    const amplitude = 0.5; // Max vertical movement
    const frequency = 1; // How fast the movement occurs

    const amplitudeY = 0.005; // Max vertical movement
    const frequencyY = 4; // How fast the movement occurs

    let time = 0.1;

    useFrame((state, delta) => {
        if (group.current) {
            time += delta;
            const yPosition = amplitudeY * Math.sin(frequencyY * time);
            const angle = amplitude * Math.sin(frequency * time);

            group.current.position.y += yPosition; // Adding vertical oscillation
            group.current.rotation.y = angle; // Existing rotation logic
        }
    });

    useEffect(() => {
        if (group.current) {
            const mesh = group.current.children[0];
            const metalMaterial = new THREE.MeshPhysicalMaterial({
                map: texture,
                metalness: 0.7, // Increased metalness
                roughness: 0.1, // Reduced roughness for smoothness
            });
            mesh.material = metalMaterial;
            mesh.material.needsUpdate = true;
        }
    }, [nodes]);

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_2.geometry}
                  material={materials.wire_224198087}
                  rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    );
}

export default Clef;

useGLTF.preload('/models/Clef5.glb');
