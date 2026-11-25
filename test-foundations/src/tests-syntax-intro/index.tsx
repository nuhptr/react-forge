import { useState } from "react"

import { contohAngka, sintaks } from "./sintaks"

/**
 * Fungsi kecil yang diuji pada contoh ini.
 *
 * @param a - Bilangan pertama.
 * @param b - Bilangan kedua.
 * @returns Hasil penjumlahan kedua bilangan.
 */
const tambah = (a: number, b: number) => a + b

/**
 * Menjalankan satu siklus Arrange-Act-Assert.
 *
 * @param pasangan - [nilai a, nilai b, ekspektasi].
 * @returns Langkah-langkah beserta status lulusnya.
 */
const jalankanContoh = ([a, b, expected]: [number, number, number]) => {
    const actual = tambah(a, b)
    return { a, b, expected, actual, lolos: actual === expected }
}

/**
 * Demo Tests Syntax Intro: describe, it, expect, dan pola AAA.
 *
 * @returns Tabel sintaks dan contoh assertion yang bisa dijalankan ulang.
 */
export default function TestsSyntaxIntro() {
    const [indeks, setIndeks] = useState(0)
    const hasil = jalankanContoh(contohAngka[indeks])

    /** Memilih pasangan angka berikutnya secara berurutan. */
    const contohBerikutnya = () => setIndeks((current) => (current + 1) % contohAngka.length)

    return (
        <section className="panel" aria-label="Tests Syntax Intro">
            <h3 className="text-lg font-semibold text-blue-400">Tests Syntax Intro</h3>
            <ul className="grid gap-1 text-sm">
                {sintaks.map((item) => (
                    <li key={item.kata} className="rounded border border-slate-700 p-2">
                        <code className="text-blue-300">{item.kata}</code> — {item.arti}
                        <code className="mt-1 block text-xs text-slate-400">{item.contoh}</code>
                    </li>
                ))}
            </ul>

            <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-3 text-sm">
                <p className="font-semibold text-slate-200">Contoh AAA</p>
                <p className="text-slate-400">
                    Arrange: a = {hasil.a}, b = {hasil.b}, expected = {hasil.expected}
                </p>
                <p className="text-slate-400">Act: actual = tambah(a, b) = {hasil.actual}</p>
                <p className="text-slate-400">
                    Assert: expect(actual).toBe(expected) →{" "}
                    <strong className={hasil.lolos ? "text-emerald-400" : "text-rose-400"}>
                        {hasil.lolos ? "PASS ✓" : "FAIL ✗"}
                    </strong>
                </p>
                <button
                    type="button"
                    onClick={contohBerikutnya}
                    className="mt-2 rounded-lg border border-slate-700 px-3 py-1 text-xs text-slate-200 transition hover:border-blue-500">
                    Jalankan contoh berikutnya
                </button>
            </div>
        </section>
    )
}
