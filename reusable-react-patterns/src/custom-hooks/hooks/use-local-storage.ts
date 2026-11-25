import { useEffect, useState } from "react"

/**
 * Custom hook yang menyelaraskan state dengan localStorage.
 *
 * Kegagalan akses penyimpanan (misalnya mode pribadi browser) ditangani diam-diam
 * sehingga state lokal tetap usable.
 *
 * @param key - Kunci penyimpanan.
 * @param initial - Nilai awal saat kunci belum tersedia.
 * @returns Pasangan nilai dan setter seperti useState.
 */
export function useLocalStorage(key: string, initial: number) {
    const [value, setValue] = useState<number>(() => {
        try {
            const stored = window.localStorage.getItem(key)
            const parsed = stored === null ? initial : Number(stored)
            return Number.isFinite(parsed) ? parsed : initial
        } catch {
            return initial
        }
    })

    useEffect(() => {
        try {
            window.localStorage.setItem(key, String(value))
        } catch {
            // Penyimpanan diblokir: state tetap berfungsi selama komponen hidup.
        }
    }, [key, value])

    return [value, setValue] as const
}
