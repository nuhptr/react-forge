import { useState } from "react"

import { fetchUser, type User } from "./api"
import { ID_GAGAL, ID_VALID } from "./config"

/** Hasil satu assertion asynchronous. */
interface HasilTest {
    nama: string
    detail: string
    lolos: boolean
}

/**
 * Mengubah data pengguna menjadi ringkasan yang mudah dibaca.
 *
 * @param user - Data pengguna.
 * @returns Ringkasan nama dan id.
 */
const formatUser = (user: User) => `${user.nama} (#${user.id})`

/**
 * Menjalankan test resolves dan rejects dengan async/await.
 *
 * @returns Dua hasil assertion beserta statusnya.
 */
const jalankanTestAsync = async (): Promise<HasilTest[]> => {
    const hasil: HasilTest[] = []

    try {
        const user = await fetchUser(ID_VALID)
        hasil.push({
            nama: "expect(fetchUser(1)).resolves.toEqual(...)",
            detail: formatUser(user),
            lolos: user.id === ID_VALID,
        })
    } catch (error) {
        hasil.push({
            nama: "expect(fetchUser(1)).resolves.toEqual(...)",
            detail: error instanceof Error ? error.message : String(error),
            lolos: false,
        })
    }

    try {
        await fetchUser(ID_GAGAL)
        hasil.push({
            nama: "expect(fetchUser(0)).rejects.toThrow(...)",
            detail: "API tidak melempar error",
            lolos: false,
        })
    } catch (error) {
        const pesan = error instanceof Error ? error.message : String(error)
        hasil.push({
            nama: "expect(fetchUser(0)).rejects.toThrow(...)",
            detail: pesan,
            lolos: pesan === "Pengguna tidak ditemukan",
        })
    }

    return hasil
}

/**
 * Demo Testing Asynchronous Code: menunggu Promise sebelum assertion.
 *
 * @returns Panel dengan tombol menjalankan test dan daftar hasilnya.
 */
export default function TestingAsync() {
    const [hasil, setHasil] = useState<HasilTest[]>([])
    const [memuat, setMemuat] = useState(false)

    /** Menjalankan ulang seluruh test asynchronous. */
    const jalankanUlang = async () => {
        setMemuat(true)
        const results = await jalankanTestAsync()
        setHasil(results)
        setMemuat(false)
    }

    return (
        <section className="panel" aria-label="Testing Async">
            <h3 className="text-lg font-semibold text-blue-400">Testing Async</h3>
            <p className="text-sm text-slate-400">
                Gunakan await pada test, lalu expect(...).resolves atau .rejects.
            </p>
            <pre className="overflow-x-auto rounded border border-slate-700 bg-slate-900/60 p-2 text-xs text-blue-300">
                {`it("mengambil user", async () => {
  const user = await fetchUser(1)
  expect(user.nama).toBe("Pengguna 1")
})`}
            </pre>
            <button type="button" className="btn w-fit" disabled={memuat} onClick={jalankanUlang}>
                {memuat ? "Menunggu Promise..." : "Jalankan test async"}
            </button>
            <ul className="grid gap-2 text-sm" aria-live="polite">
                {hasil.map((item) => (
                    <li
                        key={item.nama}
                        className="rounded-lg border border-slate-700 bg-slate-900/60 p-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <code className="text-xs text-blue-300">{item.nama}</code>
                            <span
                                className={
                                    item.lolos
                                        ? "text-xs font-semibold text-emerald-400"
                                        : "text-xs font-semibold text-rose-400"
                                }>
                                {item.lolos ? "PASS ✓" : "FAIL ✗"}
                            </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-400">{item.detail}</p>
                    </li>
                ))}
            </ul>
            {hasil.length === 0 && !memuat && (
                <p className="text-xs text-slate-500">Belum ada hasil. Jalankan test di atas.</p>
            )}
        </section>
    )
}
