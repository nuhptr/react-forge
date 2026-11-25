import { useCallback, useState } from "react"

/**
 * Nilai kembalian tuple dari custom hook {@link useToggle}.
 */
export type UseToggleTuple = readonly [
    isActive: boolean,
    toggleValue: () => void,
    setValue: (nextValue: boolean) => void,
]

/**
 * Custom hook reusable untuk mengelola state boolean aktif/nonaktif (toggle).
 *
 * @param initialValue Nilai boolean awal. Bawaan `false`.
 * @returns Tuple `[isActive, toggleValue, setValue]`.
 */
export const useToggle = (initialValue = false): UseToggleTuple => {
    const [isActive, setIsActive] = useState<boolean>(initialValue)

    const toggleValue = useCallback(() => {
        setIsActive((prevValue) => !prevValue)
    }, [])

    return [isActive, toggleValue, setIsActive] as const
}
