"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { RoundedBox, Environment } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

function FloatingBlock({ position, rotation, scale, color }: any) {
    const mesh = useRef<THREE.Mesh>(null)
    const factor = useMemo(() => 0.5 + Math.random(), [])

    useFrame((state) => {
        if (!mesh.current) return

        // Gentle rotation
        mesh.current.rotation.x += 0.001 * factor
        mesh.current.rotation.y += 0.002 * factor

        // Gentle float
        const t = state.clock.getElapsedTime()
        mesh.current.position.y = position[1] + Math.sin(t * factor + position[0]) * 0.5
    })

    return (
        <RoundedBox
            ref={mesh}
            args={[1, 1, 1]}
            radius={0.1}
            smoothness={4}
            scale={scale}
            position={position}
            rotation={rotation}
        >
            <meshStandardMaterial
                color={color}
                roughness={0.4}
                metalness={0.1}
            />
        </RoundedBox>
    )
}

export function FloatingBlocks() {
    // Generate random blocks
    const blocks = useMemo(() => {
        const items = []
        const colors = ["#e0e7ff", "#fae8ff", "#dbeafe"] // light subtle colors
        for (let i = 0; i < 20; i++) {
            items.push({
                position: [
                    (Math.random() - 0.5) * 20, // x
                    (Math.random() - 0.5) * 20, // y
                    (Math.random() - 0.5) * 10 - 5 // z (push back)
                ],
                rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
                scale: Math.random() * 1.5 + 0.5,
                color: colors[Math.floor(Math.random() * colors.length)]
            })
        }
        return items
    }, [])

    return (
        <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-30">
            <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <Environment preset="studio" />

                {blocks.map((block, i) => (
                    <FloatingBlock key={i} {...block} />
                ))}
            </Canvas>
        </div>
    )
}
