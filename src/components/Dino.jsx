/*
 * Import remote dependencies
 */
import * as THREE from "three";
import {useEffect, useMemo} from 'react';
import {applyProps} from '@react-three/fiber'
import {useGLTF, useAnimations, useTexture, Shadow} from '@react-three/drei'

const Dino = (props) => {
    const {scene, nodes, materials, animations} = useGLTF('../../public/trex.gltf');
    const {mixer} = useAnimations(animations);
    const [albedo, ao, normal, rough] = useTexture([
        '../../public/textures/TRex_Albedo.jpg',
        '../../public/textures/TRex_AO.jpg',
        '../../public/textures/TRex_Normal.jpg',
        '../../public/textures/TRex_Rough.jpg'
    ])

    useEffect(() => {
        mixer.clipAction(animations[1], scene).play();
    }, [])

    useMemo(() => {
        albedo.encoding = THREE.sRGBEncoding;
        albedo.flipY = false;
        ao.flipY = false;
        normal.flipY = false;
        rough.flipY = false;
        applyProps(materials.TRex, {map: albedo, auMap: ao, normalMap: normal, roughnessMap: rough})
    }, [nodes, materials])

    return (
        <group scale={2.3} position={[12, -8, 0]} rotation={[0, -.7, 0]}>
            <primitive castShadow receiveShadow object={scene} {...props}/>
            <Shadow color="black" colorStop={0} opacity={1} fog={true}/>
        </group>
    )
};

export default Dino