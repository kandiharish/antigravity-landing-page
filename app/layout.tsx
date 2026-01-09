import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Antigravity | Weightless Design',
    description: 'A tribute to lightness, flow, and calm futuristic interface design.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <body className={cn(inter.variable, "bg-space-black text-starlight-white transition-colors duration-500")}>
                {children}
            </body>
        </html>
    )
}
