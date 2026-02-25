"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Grid } from "@react-three/drei";
import * as THREE from "three";

const Particles = ({ count = 500 }) => {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        const colorArray = new Float32Array(count * 3);
        const mainColor = new THREE.Color("#0D6E6E");
        const accentColor = new THREE.Color("#C9A84C");

        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 15;
            p[i * 3 + 1] = (Math.random() - 0.5) * 15;
            p[i * 3 + 2] = (Math.random() - 0.5) * 15;

            const mixedColor = i % 10 === 0 ? accentColor : mainColor;
            colorArray[i * 3] = mixedColor.r;
            colorArray[i * 3 + 1] = mixedColor.g;
            colorArray[i * 3 + 2] = mixedColor.b;
        }
        return { positions: p, colors: colorArray };
    }, [count]);

    const pointsRef = useRef();
    useFrame((state) => {
        pointsRef.current.rotation.y += 0.0003;
        pointsRef.current.rotation.x += 0.0001;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={points.positions.length / 3}
                    array={points.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={points.colors.length / 3}
                    array={points.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.025} vertexColors transparent opacity={0.3} sizeAttenuation />
        </points>
    );
};

const AbstractMesh = () => {
    const meshRef = useRef();

    // Create a dense grid of points for a waving "digital fabric" look
    const count = 40;
    const [positions, setPositions] = useMemo(() => {
        const p = new Float32Array(count * count * 3);
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                p[(i * count + j) * 3] = (i - count / 2) * 0.25;
                p[(i * count + j) * 3 + 1] = (j - count / 2) * 0.25;
                p[(i * count + j) * 3 + 2] = 0;
            }
        }
        return [p, count];
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const array = meshRef.current.geometry.attributes.position.array;

        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                const index = (i * count + j) * 3;
                const x = array[index];
                const y = array[index + 1];

                // Waving motion
                array[index + 2] = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time) * 0.5;
            }
        }
        meshRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={meshRef} rotation={[-Math.PI / 3, 0, Math.PI / 6]} position={[2, -1, 0]}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.015} color="#0D6E6E" transparent opacity={0.3} sizeAttenuation />
        </points>
    );
};

export const ThreeBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 bg-[#FAF7F2]">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Grid
                    infiniteGrid
                    fadeDistance={30}
                    fadeStrength={5}
                    cellSize={1}
                    sectionSize={3}
                    sectionThickness={1.5}
                    sectionColor="#0D6E6E"
                    cellColor="#0D6E6E"
                    cellThickness={0.8}
                    opacity={0.05}
                    position={[0, -2, 0]}
                    rotation={[0, 0, 0]}
                />
                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
                <AbstractMesh />
                <Particles count={600} />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(13,110,110,0.08),transparent_70%)] pointer-events-none" />
        </div>
    );
};
