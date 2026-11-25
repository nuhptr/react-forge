interface UserStatusProps {
    nama: string
    online: boolean
}

/**
 * Komponen dengan teks dan status yang bisa ditemukan lewat role.
 *
 * @param props - Nama pengguna dan status kehadiran.
 * @returns Paragraf status dengan atribut data-testid.
 */
export function UserStatus({ nama, online }: UserStatusProps) {
    return (
        <p
            role="status"
            data-testid="user-status"
            className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200">
            {nama} — {online ? "online" : "offline"}
        </p>
    )
}

interface LanguageListProps {
    items: string[]
}

/**
 * Daftar bahasa yang dirender sebagai listitem.
 *
 * @param props - Daftar nama bahasa.
 * @returns Elemen ul berisi satu li per bahasa.
 */
export function LanguageList({ items }: LanguageListProps) {
    return (
        <ul aria-label="Bahasa" className="grid gap-1 text-sm text-slate-300">
            {items.map((item) => (
                <li key={item} className="rounded border border-slate-700 px-2 py-1">
                    {item}
                </li>
            ))}
        </ul>
    )
}
