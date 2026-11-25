interface BadgeProps {
    label?: string
}

/**
 * Komponen Badge design system.
 *
 * @param props - Label badge.
 * @returns Badge dengan gaya konsisten.
 */
export default function ReactComponents({ label }: BadgeProps) {
    return (
        <section className="panel" aria-label="Design system components">
            <h3 className="text-lg font-semibold text-blue-400">React Components</h3>
            <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                    {label ?? "Primary"}
                </span>
                <span className="rounded-full bg-slate-700 px-3 py-1 text-sm font-semibold text-slate-200">
                    Secondary
                </span>
            </div>
        </section>
    )
}
