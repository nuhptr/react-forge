import { useState } from "react"

import { cases } from "./cases"

/** Filter hasil yang tersedia di demo. */
type Filter = "semua" | "lulus" | "gagal"

/** Pilihan filter ditaruh di konfigurasi lokal file ini. */
const filterOptions: Filter[] = ["semua", "lulus", "gagal"]

/**
 * Membandingkan dua nilai secara dangkal (cukup untuk contoh ini).
 *
 * @param actual - Nilai hasil fungsi.
 * @param expected - Nilai yang diharapkan.
 * @returns true jika keduanya sama.
 */
const sama = (actual: unknown, expected: unknown) =>
    JSON.stringify(actual) === JSON.stringify(expected)

/**
 * Demo Basic Tests: assertion sederhana untuk angka, string, array, dan objek.
 *
 * @returns Daftar hasil test beserta filter status.
 */
export default function BasicTests() {
    const [filter, setFilter] = useState<Filter>("semua")
    const hasil = cases.map((testCase) => {
        const actual = testCase.aktual()
        return {
            nama: testCase.nama,
            actual,
            expected: testCase.expected,
            lolos: sama(actual, testCase.expected),
        }
    })
    const ditampilkan = hasil.filter((item) => {
        if (filter === "lulus") return item.lolos
        if (filter === "gagal") return !item.lolos
        return true
    })
    const lulus = hasil.filter((item) => item.lolos).length

    return (
        <section className="panel" aria-label="Basic Tests">
            <h3 className="text-lg font-semibold text-blue-400">Basic Tests</h3>
            <p className="text-sm text-slate-400">
                {lulus} dari {hasil.length} test lulus. Satu test sengaja dibuat merah.
            </p>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter hasil test">
                {filterOptions.map((option) => (
                    <button
                        key={option}
                        type="button"
                        aria-pressed={filter === option}
                        onClick={() => setFilter(option)}
                        className="rounded-lg border border-slate-700 px-3 py-1 text-xs capitalize text-slate-200 transition hover:border-blue-500 aria-pressed:border-blue-500 aria-pressed:bg-blue-500/10">
                        {option}
                    </button>
                ))}
            </div>

            <ul className="grid gap-2 text-sm">
                {ditampilkan.map((item) => (
                    <li
                        key={item.nama}
                        className="rounded-lg border border-slate-700 bg-slate-900/60 p-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <code className="text-blue-300">{item.nama}</code>
                            <span
                                className={
                                    item.lolos
                                        ? "text-xs font-semibold text-emerald-400"
                                        : "text-xs font-semibold text-rose-400"
                                }>
                                {item.lolos ? "PASS ✓" : "FAIL ✗"}
                            </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-400">
                            expected {JSON.stringify(item.expected)} · actual{" "}
                            {JSON.stringify(item.actual)}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
