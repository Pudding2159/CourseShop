import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Clef = (props) => {
    const group = useRef();

    const { nodes, materials } = useGLTF('/models/Clef2.glb');
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('models/gradinet1.jpg', 
        () => console.log("Texture loaded successfully"),
        undefined,
        (error) => console.error("Failed to load texture:", error)
    );

    const amplitude = 0.6;
    const frequency = 2;
    let time = 0.1;

    useFrame((state, delta) => {
        if (group.current) {
            time += delta;
            const angle = amplitude * Math.sin(frequency * time);
            group.current.rotation.y = angle;
        }
    });

    useEffect(() => {
        if (group.current) {
            const mesh = group.current.children[0];
            const metalMaterial = new THREE.MeshStandardMaterial({
                map: texture,
                transmission: 0.9, // Добавляет эффект преломления (новое свойство в r129)
                reflectivity: 0.9, // Отражательная способность
                
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
                geometry={nodes.treblepolySurface1.geometry}
                material={nodes.treblepolySurface1.material}
            />
        </group>
    );
}

export default Clef;

useGLTF.preload('/models/Clef2.glb');
