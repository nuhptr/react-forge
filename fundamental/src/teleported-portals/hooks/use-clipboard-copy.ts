import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Kontrak nilai kembalian dari custom hook {@link useClipboardCopy}.
 */
export interface UseClipboardCopyResult {
    /** Menandakan apakah penyalinan terakhir berhasil dan notifikasinya masih aktif. */
    isCopied: boolean
    /** Pesan kesalahan apabila akses clipboard gagal, atau `null` jika berhasil. */
    errorMessage: string | null
    /** Menyalin teks yang diberikan ke clipboard sistem. */
    copyToClipboard: (text: string) => Promise<boolean>
    /** Menutup notifikasi status penyalinan secara langsung. */
    dismissNotification: () => void
    /** Menjeda timer penutupan otomatis (misalnya saat fokus keyboard berada di dalam toast). */
    pauseAutoDismiss: () => void
    /** Melanjutkan kembali timer penutupan otomatis setelah fokus keluar dari toast. */
    resumeAutoDismiss: () => void
}

/**
 * Mengelola operasi penulisan ke clipboard serta siklus waktu penutupan notifikasi otomatis.
 *
 * Dipisahkan dari komponen UI untuk memenuhi Single Responsibility Principle (SRP):
 * logika I/O clipboard dan manajemen timer tidak bercampur dengan proses rendering komponen.
 *
 * @param resetDelayMs Durasi dalam milidetik sebelum `isCopied` direset kembali menjadi `false`.
 * @returns State clipboard beserta fungsi-fungsi pengendali notifikasi.
 */
export const useClipboardCopy = (resetDelayMs = 3000): UseClipboardCopyResult => {
    const [isCopied, setIsCopied] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const autoDismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const clearAutoDismissTimer = useCallback(() => {
        if (autoDismissTimerRef.current !== null) {
            clearTimeout(autoDismissTimerRef.current)
            autoDismissTimerRef.current = null
        }
    }, [])

    const scheduleAutoDismiss = useCallback(() => {
        clearAutoDismissTimer()
        autoDismissTimerRef.current = setTimeout(() => {
            setIsCopied(false)
            autoDismissTimerRef.current = null
        }, resetDelayMs)
    }, [clearAutoDismissTimer, resetDelayMs])

    useEffect(() => clearAutoDismissTimer, [clearAutoDismissTimer])

    const dismissNotification = useCallback(() => {
        clearAutoDismissTimer()
        setIsCopied(false)
    }, [clearAutoDismissTimer])

    const pauseAutoDismiss = useCallback(() => {
        clearAutoDismissTimer()
    }, [clearAutoDismissTimer])

    const resumeAutoDismiss = useCallback(() => {
        if (isCopied) {
            scheduleAutoDismiss()
        }
    }, [isCopied, scheduleAutoDismiss])

    const copyToClipboard = useCallback(
        async (text: string): Promise<boolean> => {
            const trimmedText = text.trim()
            if (!trimmedText) return false

            if (!navigator.clipboard?.writeText) {
                setErrorMessage("Clipboard API tidak didukung pada browser ini.")
                setIsCopied(false)
                return false
            }

            try {
                await navigator.clipboard.writeText(trimmedText)
                setErrorMessage(null)
                setIsCopied(true)
                scheduleAutoDismiss()
                return true
            } catch {
                setErrorMessage("Gagal menyalin teks ke clipboard.")
                setIsCopied(false)
                return false
            }
        },
        [scheduleAutoDismiss],
    )

    return {
        isCopied,
        errorMessage,
        copyToClipboard,
        dismissNotification,
        pauseAutoDismiss,
        resumeAutoDismiss,
    }
}
