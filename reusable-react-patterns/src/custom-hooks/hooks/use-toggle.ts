import { useState } from "react"

/**
 * Custom hook untuk nilai boolean yang bisa dibalik.
 *
 * Single Responsibility: hanya mengelola state boolean; tampilan tetap di
 * komponen yang memakainya.
 *
 * @param initial - Nilai awal (default false).
 * @returns Nilai saat ini, fungsi toggle, dan setter eksplisit.
 */
export function useToggle(initial = false) {
    const [value, setValue] = useState(initial)
    const toggle = () => setValue((current) => !current)

    return { value, toggle, setValue }
}
