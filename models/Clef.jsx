import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Clef = (props) => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/models/Clef.glb');

    // This hook allows us to rotate the model on every frame
    useFrame(() => {
        if (group.current) {
            group.current.rotation.y += 0.01;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
                material={materials['lambert2SG.001']}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    );
}

export default Clef;

useGLTF.preload('/models/Clef.glb');
