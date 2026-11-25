interface ButtonProps {
    children?: React.ReactNode
    variant?: "primary" | "secondary"
    disabled?: boolean
}

/**
 * Komponen Button reusable untuk library.
 *
 * Open/Closed: varian baru bisa ditambah tanpa ubah struktur komponen.
 *
 * @param props - Children, variant, dan status disabled.
 * @returns Tombol library.
 */
export default function Button({ children, variant = "primary" }: ButtonProps) {
    const variantClass =
        variant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-500"
            : "bg-slate-700 text-slate-100 hover:bg-slate-600"

    return (
        <section className="panel" aria-label="Button library">
            <h3 className="text-lg font-semibold text-blue-400">Button Component</h3>
            <div className="flex flex-wrap gap-2">
                <button
                    type="button"
                    className={`rounded-lg px-4 py-2 font-semibold ${variantClass}`}>
                    {children}
                </button>
                <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-lg bg-slate-700 px-4 py-2 font-semibold text-slate-400 opacity-50">
                    Disabled
                </button>
            </div>
        </section>
    )
}
