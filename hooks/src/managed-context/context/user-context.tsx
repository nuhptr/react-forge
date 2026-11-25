import { createContext, useContext, useState, type ReactNode } from "react"

/**
 * Struktur entitas pengguna yang dikelola di dalam Context.
 */
export interface UserAccount {
    name: string
}

/**
 * Kontrak nilai dan aksi pembaruan pada {@link UserContext}.
 */
export interface UserContextValue {
    user: UserAccount
    updateUserName: (nextName: string) => void
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

/**
 * Props untuk komponen {@link UserProvider}.
 */
export interface UserProviderProps {
    children: ReactNode
}

/**
 * Provider stateful untuk challenge `useContext` yang menyimpan data pengguna
 * beserta fungsi pengubah namanya.
 *
 * @param props Elemen anak yang membutuhkan akses state pengguna.
 * @returns Elemen provider `UserContext`.
 */
export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<UserAccount>({ name: "John Doe" })

    const updateUserName = (nextName: string) => {
        const trimmedName = nextName.trim()
        if (!trimmedName) return
        setUser({ name: trimmedName })
    }

    return <UserContext.Provider value={{ user, updateUserName }}>{children}</UserContext.Provider>
}

/**
 * Custom hook untuk mengakses state dan aksi dari {@link UserContext} secara aman.
 *
 * @returns Objek `{ user, updateUserName }`.
 */
export const useUserContext = (): UserContextValue => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUserContext wajib dipanggil di dalam UserProvider.")
    }
    return context
}
