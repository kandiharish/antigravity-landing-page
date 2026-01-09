export function Footer() {
    return (
        <footer className="py-24 text-center z-10 relative">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-neutral-800 to-transparent mx-auto mb-8"></div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-light">
                Antigravity Concept © {new Date().getFullYear()}
            </p>
        </footer>
    )
}
