import { useCallback, useState, type ChangeEvent } from "react"

/**
 * Kontrak nilai dan pengendali untuk satu field input terkontrol dari {@link useFormInput}.
 */
export interface UseFormInputResult {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    reset: () => void
}

/**
 * Custom hook untuk merangkum state string, event `onChange`, dan aksi `reset` pada elemen `<input>`.
 *
 * @param initialValue Nilai string awal. Bawaan `""`.
 * @returns Objek binding input beserta fungsi `reset`.
 */
export const useFormInput = (initialValue = ""): UseFormInputResult => {
    const [value, setValue] = useState<string>(initialValue)

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    const reset = useCallback(() => {
        setValue(initialValue)
    }, [initialValue])

    return { value, onChange, reset }
}
