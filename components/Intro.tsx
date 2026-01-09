"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, Environment, Text } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"
import * as THREE from "three"
import { motion, AnimatePresence } from "framer-motion"

function ExplodingBlock({ onComplete }: { onComplete: () => void }) {
    // Determine grid size based on window width
    // Larger screens = more blocks (e.g. 4), smaller screens = fewer (e.g. 3)
    const gridSize = typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 4
    const count = Math.pow(gridSize, 3)

    // Create Refs for each small cube
    const cubes = useRef<(THREE.Mesh | null)[]>([])

    // State to trigger explosion
    const [exploded, setExploded] = useState(false)

    // Store initial and target positions/rotations
    const data = useRef<{
        position: [number, number, number],
        targetPos: [number, number, number],
        rotationDir: [number, number, number],
        speed: number
    }[]>([])

    // Initialize data once
    useEffect(() => {
        const offset = (gridSize - 1) / 2

        for (let x = 0; x < gridSize; x++) {
            for (let y = 0; y < gridSize; y++) {
                for (let z = 0; z < gridSize; z++) {
                    // Initial packed position
                    const px = x - offset
                    const py = y - offset
                    const pz = z - offset

                    // Target specific directions + some randomness
                    const dir = new THREE.Vector3(px, py, pz).normalize().multiplyScalar(Math.random() * 5 + 5)

                    data.current.push({
                        position: [px, py, pz],
                        targetPos: [dir.x, dir.y, dir.z],
                        rotationDir: [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5],
                        speed: Math.random() * 0.05 + 0.02
                    })
                }
            }
        }

        // Trigger explosion after delay
        const timer = setTimeout(() => {
            setExploded(true)
            // Signal completion to parent after animation plays out
            setTimeout(onComplete, 1500)
        }, 800)

        return () => clearTimeout(timer)
    }, [])

    useFrame((state, delta) => {
        if (!exploded) {
            // Tiny hover/breathing before explosion
            const t = state.clock.getElapsedTime()
            cubes.current.forEach((cube, i) => {
                if (!cube) return
                cube.rotation.y = Math.sin(t * 2) * 0.05
            })
            return
        }

        // Animation logic
        cubes.current.forEach((cube, i) => {
            if (!cube) return
            const d = data.current[i]

            // Move towards target
            cube.position.x += (d.targetPos[0] * 10 - cube.position.x) * d.speed
            cube.position.y += (d.targetPos[1] * 10 - cube.position.y) * d.speed
            cube.position.z += (d.targetPos[2] * 10 - cube.position.z) * d.speed

            // Rotate wildly
            cube.rotation.x += d.rotationDir[0] * 0.2
            cube.rotation.y += d.rotationDir[1] * 0.2

            // Shrink/Fade out simulation (scale)
            if (cube.scale.x > 0) {
                const s = Math.max(0, cube.scale.x - delta * 0.8)
                cube.scale.set(s, s, s)
            }
        })
    })

    return (
        <group>
            {Array.from({ length: count }).map((_, i) => {
                // Recover x,y,z index from linear index i
                const x = Math.floor(i / (gridSize * gridSize))
                const y = Math.floor((i % (gridSize * gridSize)) / gridSize)
                const z = i % gridSize

                const offset = (gridSize - 1) / 2

                return (
                    <mesh
                        key={i}
                        ref={(el) => (cubes.current[i] = el)}
                        position={[x - offset, y - offset, z - offset]}
                    >
                        <boxGeometry args={[0.95, 0.95, 0.95]} />
                        <meshStandardMaterial
                            color="#4f46e5"
                            roughness={0.1}
                            metalness={0.8}
                        />
                    </mesh>
                )
            })}
        </group>
    )
}

export function Intro({ onIntroComplete }: { onIntroComplete: () => void }) {
    const [finished, setFinished] = useState(false)

    const handleComplete = () => {
        setFinished(true)
        setTimeout(onIntroComplete, 500) // fade out buffer
    }

    return (
        <AnimatePresence>
            {!finished && (
                <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
                >
                    <div className="w-full h-full relative">
                        <Canvas>
                            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                            <Environment preset="city" />
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1.5} />

                            <ExplodingBlock onComplete={handleComplete} />
                        </Canvas>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
