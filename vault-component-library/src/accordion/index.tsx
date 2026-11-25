import { useState } from "react"

interface Section {
    title: string
    content: string
}

/**
 * Satu bagian accordion.
 */
const SectionView = ({
    title,
    content,
    isOpen,
    onToggle,
}: Section & { isOpen: boolean; onToggle: () => void }) => (
    <div className="rounded-lg border border-slate-700">
        <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            className="w-full p-3 text-left font-semibold text-slate-100">
            {title}
        </button>
        {isOpen && (
            <p className="border-t border-slate-700 p-3 text-sm text-slate-400">{content}</p>
        )}
    </div>
)

/**
 * Demo Accordion.
 *
 * @returns Tiga section yang bisa dibuka tutup.
 */
export default function Accordion() {
    const [open, setOpen] = useState<number | null>(0)
    const sections: Section[] = [
        {
            title: "Apa itu Accordion?",
            content: "Komponen yang menyembunyikan konten sampai diklik.",
        },
        { title: "Kapan dipakai?", content: "Saat ingin menghemat ruang pada halaman FAQ." },
        { title: "Aksesibilitas", content: "Gunakan aria-expanded dan tombol sebagai header." },
    ]
    return (
        <section className="panel" aria-label="Accordion">
            <h3 className="text-lg font-semibold text-blue-400">Accordion</h3>
            <div className="grid gap-2">
                {sections.map((section, index) => (
                    <SectionView
                        key={section.title}
                        {...section}
                        isOpen={open === index}
                        onToggle={() => setOpen(open === index ? null : index)}
                    />
                ))}
            </div>
        </section>
    )
}
