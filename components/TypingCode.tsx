"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function TypingCode() {
    const [text, setText] = useState("")
    const fullText = `> SYSTEM.INIT( "ANTI-GRAVITY" )
> BYPASSING PHYSICS ENGINE... [██████] 100%
> USER_AGENT: "DIVINE_INTERVENTION"
> REWRITING CONSTRAINTS...
> GRAVITY.VALUE = NULL
> SUCCESS. HAVE A NICE FALL.`

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            setText(fullText.slice(0, i))
            i++
            if (i > fullText.length) clearInterval(interval)
        }, 50)
        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md mx-auto aspect-video rounded-xl bg-slate-950 shadow-2xl overflow-hidden border border-slate-800 font-mono text-xs md:text-sm relative group"
        >
            {/* Terminal Header */}
            <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 text-center text-slate-500 text-xs">agent_terminal.exe</div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 text-green-400 leading-relaxed whitespace-pre-wrap relative">
                {text}
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 H-4 bg-green-400 ml-1 align-middle"
                >
                    &nbsp;
                </motion.span>
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
        </motion.div>
    )
}
