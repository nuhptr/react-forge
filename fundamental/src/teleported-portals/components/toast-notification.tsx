import Portal from "./portal"

/**
 * Props untuk komponen {@link ToastNotification}.
 */
export interface ToastNotificationProps {
    /** Menentukan apakah notifikasi toast ditampilkan atau disembunyikan. */
    isVisible: boolean
    /** Teks pesan yang ditampilkan dan dibacakan oleh pembaca layar. */
    message?: string
    /** Callback saat pengguna menutup notifikasi secara manual. */
    onDismiss: () => void
    /** Callback opsional untuk menjeda penutupan otomatis ketika fokus keyboard berada di dalam toast. */
    onPauseDismiss?: () => void
    /** Callback opsional untuk melanjutkan penutupan otomatis ketika fokus meninggalkan toast. */
    onResumeDismiss?: () => void
}

/**
 * Merender notifikasi toast yang aksesibel di luar `#root` menggunakan {@link Portal}.
 *
 * Memanfaatkan `role="status"` (`aria-live="polite"`) untuk pembaca layar tanpa memotong fokus,
 * serta menyediakan tombol tutup yang ramah navigasi keyboard.
 *
 * @param props Properti konfigurasi toast.
 * @returns Elemen toast di dalam portal ketika aktif, atau `null` saat disembunyikan.
 */
const ToastNotification = ({
    isVisible,
    message = "Copied to clipboard!",
    onDismiss,
    onPauseDismiss,
    onResumeDismiss,
}: ToastNotificationProps) => {
    if (!isVisible) return null

    return (
        <Portal>
            <div
                role="status"
                aria-live="polite"
                onFocus={onPauseDismiss}
                onBlur={onResumeDismiss}
                className="fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-950 px-4 py-3 text-sm font-medium text-emerald-50 shadow-lg"
            >
                <span>{message}</span>
                <button
                    type="button"
                    onClick={onDismiss}
                    className="rounded px-2 py-1 text-xs font-semibold text-emerald-200 hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                >
                    Close
                </button>
            </div>
        </Portal>
    )
}

export default ToastNotification
