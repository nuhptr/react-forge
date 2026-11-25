import { Children, isValidElement, type ReactNode } from "react"

/** Nama slot yang dikenali kartu. */
export type SlotName = "header" | "footer"

interface SlotProps {
    slot: SlotName
    children: ReactNode
}

/**
 * Penanda anak yang akan ditempatkan pada slot bernama.
 *
 * Komponen ini hanya membungkus konten; pemetaan dilakukan Card.
 *
 * @param props - Anak yang akan ditempatkan ke slot.
 * @returns Isi slot tanpa elemen pembungkus tambahan.
 */
export const Slot = ({ children }: SlotProps) => <>{children}</>

/**
 * Mengelompokkan anak Card menjadi region header, body, dan footer.
 *
 * @param children - Anak-anak Card, baik bertanda slot maupun biasa.
 * @returns Kumpulan elemen untuk tiap region.
 */
const pisahkanSlot = (children: ReactNode) => {
    const header: ReactNode[] = []
    const footer: ReactNode[] = []
    const body: ReactNode[] = []

    Children.forEach(children, (child) => {
        if (isValidElement<SlotProps>(child) && child.type === Slot) {
            if (child.props.slot === "header") {
                header.push(child.props.children)
            } else {
                footer.push(child.props.children)
            }
            return
        }
        body.push(child)
    })

    return { header, footer, body }
}

interface CardProps {
    children: ReactNode
}

/**
 * Kartu dengan named slots: header, konten default, dan footer.
 *
 * Single Responsibility: hanya menempatkan konten ke region yang sesuai.
 *
 * @param props - Anak kartu yang ditandai slot atau konten biasa.
 * @returns Kartu dengan region slot terisi.
 */
export default function Card({ children }: CardProps) {
    const { header, footer, body } = pisahkanSlot(children)

    return (
        <article className="grid gap-3 rounded-xl border border-slate-700 bg-slate-900/60 p-4">
            {header.length > 0 && (
                <header className="border-b border-slate-700 pb-2 font-semibold text-blue-300">
                    {header}
                </header>
            )}
            <div className="text-sm leading-relaxed text-slate-300">{body}</div>
            {footer.length > 0 && (
                <footer className="flex flex-wrap items-center gap-2 border-t border-slate-700 pt-2 text-xs text-slate-400">
                    {footer}
                </footer>
            )}
        </article>
    )
}
