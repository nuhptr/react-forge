import { useEffect, useId, useState } from "react"

const USER_NAME_STORAGE_KEY = "react-forge:user-name"

/**
 * Reads the persisted user name from `localStorage` once during initial mount.
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
 * Demonstrates real-world lazy `useState` initialization backed by `localStorage`
 * and synchronized via `useEffect`.
 *
 * @returns Persistent name input widget.
 */
const PersistentNameForm = () => {
    const nameInputId = useId()
    const [userName, setUserName] = useState<string>(readStoredUserName)

    useEffect(() => {
        try {
            window.localStorage.setItem(USER_NAME_STORAGE_KEY, JSON.stringify(userName))
        } catch {
            // Ignore storage quota or private-mode write errors.
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
