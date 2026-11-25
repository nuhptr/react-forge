import type { ComponentType } from "react"

import { decoratorInfo } from "./config"

interface StoryProps {
    label: string
}

/**
 * Story sederhana yang akan dibungkus dekorator.
 *
 * @param props - Label yang ditampilkan.
 * @returns Tombol sebagai isi story.
 */
const LabelStory = ({ label }: StoryProps) => (
    <button type="button" className="btn">
        {label}
    </button>
)

/**
 * Membungkus story dengan panel dekorasi.
 *
 * Single Responsibility: hanya menambah bingkai; isi story tidak diubah.
 *
 * @param Story - Komponen story yang dibungkus.
 * @param kelas - Kelas Tailwind untuk panel.
 * @returns Story dengan dekorasi panel.
 */
const withPanel = (Story: ComponentType<StoryProps>, kelas: string) => {
    const DecoratedStory = (props: StoryProps) => (
        <div className={`rounded-xl border p-6 ${kelas}`}>
            <Story {...props} />
        </div>
    )
    DecoratedStory.displayName = `withPanel(${Story.displayName ?? "Story"})`
    return DecoratedStory
}

/** Story dengan dekorator level meta (berlaku untuk semua story). */
const MetaDecoratedStory = withPanel(LabelStory, "border-blue-500/60 bg-blue-500/10")

/** Story dengan dekorator tambahan level story. */
const LocalDecoratedStory = withPanel(LabelStory, "border-emerald-500/60 bg-emerald-500/10")

/**
 * Demo Decorators: membungkus story tanpa mengubah komponen aslinya.
 *
 * @returns Dua versi story dengan dekorasi berbeda.
 */
export default function Decorators() {
    return (
        <section className="panel" aria-label="Decorators">
            <h3 className="text-lg font-semibold text-blue-400">Decorators</h3>
            <p className="text-sm text-slate-400">
                Dekorator membungkus story dengan layout atau konteks tambahan.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
                <MetaDecoratedStory label="Dekorasi meta" />
                <LocalDecoratedStory label="Dekorasi story" />
            </div>
            <ul className="grid gap-1 text-xs">
                {decoratorInfo.map((info) => (
                    <li key={info.nama} className="rounded border border-slate-700 p-2">
                        <strong className="text-slate-300">{info.nama}</strong> ({info.cakupan})
                        <code className="mt-1 block break-all text-blue-300">{info.kode}</code>
                    </li>
                ))}
            </ul>
        </section>
    )
}
