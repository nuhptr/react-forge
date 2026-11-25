import { useState } from "react"

import Card, { Slot } from "./card"
import { cards } from "./content"

/**
 * Demo Slots: konten dikirim ke region tertentu tanpa menambah props khusus.
 *
 * @returns Kartu-kartu dengan slot header dan footer terisi.
 */
export default function Slots() {
    const [selected, setSelected] = useState<string[]>([])

    /** Menandai atau membatalkan pilihan pada sebuah kartu. */
    const toggleSelected = (id: string) =>
        setSelected((current) =>
            current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
        )

    return (
        <section className="panel" aria-label="Slots">
            <h3 className="text-lg font-semibold text-blue-400">Slots</h3>
            <p className="text-sm text-slate-400">
                Slot bernama memisahkan struktur kartu dari isinya.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
                {cards.map((card) => {
                    const aktif = selected.includes(card.id)
                    return (
                        <Card key={card.id}>
                            <Slot slot="header">{card.judul}</Slot>
                            <p>{card.isi}</p>
                            <Slot slot="footer">
                                <button
                                    type="button"
                                    aria-pressed={aktif}
                                    onClick={() => toggleSelected(card.id)}
                                    className="rounded border border-slate-700 px-2 py-1 text-slate-200 transition hover:border-blue-500 aria-pressed:border-blue-500">
                                    {aktif ? `✓ ${card.aksi}` : card.aksi}
                                </button>
                                <span>{card.catatan}</span>
                            </Slot>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}
