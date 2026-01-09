"use client"

import { motion } from "framer-motion"
import { ChevronDown, Download } from "lucide-react"
import Link from "next/link"

export function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg shadow-black/5">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">
                        Google <span className="text-slate-500 font-normal">Antigravity</span>
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#">Product</NavLink>
                    <div className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                        Use Cases <ChevronDown className="w-4 h-4" />
                    </div>
                    <NavLink href="#">Pricing</NavLink>
                    <NavLink href="#">Blog</NavLink>
                    <NavLink href="#">Resources</NavLink>
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                </button>
            </div>
        </motion.nav>
    )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            {children}
        </Link>
    )
}
