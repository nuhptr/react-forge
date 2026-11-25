import { useEffect, useId, useState } from "react"

const USER_NAME_STORAGE_KEY = "react-forge:user-name"

/**
 * Membaca nama pengguna yang tersimpan di `localStorage` satu kali saat komponen pertama kali di-mount.
 */
const readStoredUserName = (): string => {
    if (typeof window === "undefined") return ""

    try {
        const storedValue = window.localStorage.getItem(USER_NAME_STORAGE_KEY)
        return storedValue ? (JSON.parse(storedValue) as string) : ""
    } catch {
        return ""
    }
}

/**
 * Mendemonstrasikan kasus nyata inisialisasi malas `useState` dari `localStorage`
 * yang disinkronkan secara otomatis melalui `useEffect`.
 *
 * @returns Form input nama yang tersimpan secara persisten di browser.
 */
const PersistentNameForm = () => {
    const nameInputId = useId()
    const [userName, setUserName] = useState<string>(readStoredUserName)

    useEffect(() => {
        try {
            window.localStorage.setItem(USER_NAME_STORAGE_KEY, JSON.stringify(userName))
        } catch {
            // Abaikan kegagalan penyimpanan akibat kuota penuh atau mode privat browser.
        }
    }, [userName])

    const handleClearName = () => setUserName("")

    return (
        <div>
            <h2>Your Name: {userName || "Anonymous"}</h2>
            <label htmlFor={nameInputId}>Enter your name: </label>
            <input
                id={nameInputId}
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                placeholder="Type your name"
            />
            <button type="button" onClick={handleClearName}>
                Clear Name
            </button>
        </div>
    )
}

export default PersistentNameForm
