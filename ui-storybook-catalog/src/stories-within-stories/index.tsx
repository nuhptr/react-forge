import { compositions, type Composition } from "./compositions"

interface MiniInputProps {
    placeholder: string
}

/**
 * Komponen input yang sudah memiliki story tersendiri.
 *
 * @param props - Placeholder input.
 * @returns Elemen input dengan gaya konsisten.
 */
const MiniInput = ({ placeholder }: MiniInputProps) => (
    <input
        type="text"
        placeholder={placeholder}
        className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
    />
)

interface MiniButtonProps {
    label: string
}

/**
 * Komponen tombol yang sudah memiliki story tersendiri.
 *
 * @param props - Teks tombol.
 * @returns Tombol utama.
 */
const MiniButton = ({ label }: MiniButtonProps) => (
    <button type="button" className="btn shrink-0">
        {label}
    </button>
)

/**
 * Story gabungan: merender story input dan story button sekaligus.
 *
 * @param props - Komposisi berisi args untuk kedua komponen.
 * @returns Baris form hasil komposisi dua story.
 */
const CompositeStory = ({ label, placeholder }: Composition) => (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 p-3">
        <MiniInput placeholder={placeholder} />
        <MiniButton label={label} />
    </div>
)

/**
 * Demo Stories Within Stories: story baru dibentuk dari story yang sudah ada.
 *
 * @returns Dua komposisi dengan args berbeda.
 */
export default function StoriesWithinStories() {
    return (
        <section className="panel" aria-label="Stories Within Stories">
            <h3 className="text-lg font-semibold text-blue-400">Stories Within Stories</h3>
            <p className="text-sm text-slate-400">
                Satu story dapat menyusun beberapa komponen yang masing-masing punya story.
            </p>
            <div className="grid gap-3">
                {compositions.map((composition) => (
                    <div key={composition.id} className="grid gap-1">
                        <CompositeStory {...composition} />
                        <p className="text-xs text-slate-500">{composition.catatan}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
