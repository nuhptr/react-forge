import { useEffect, useState } from "react"

/**
 * Kontrak hasil pengambilan data generik dari {@link useFetch}.
 */
export interface UseFetchResult<TData> {
    data: TData | null
    isLoading: boolean
    errorMessage: string | null
}

/**
 * Custom hook generik bertipe aman untuk mengambil data JSON dari URL menggunakan `fetch`
 * lengkap dengan pembatalan otomatis melalui `AbortController`.
 *
 * @param url Alamat endpoint HTTP yang akan diambil datanya.
 * @returns Objek status `{ data, isLoading, errorMessage }`.
 */
export const useFetch = <TData,>(url: string): UseFetchResult<TData> => {
    const [data, setData] = useState<TData | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    useEffect(() => {
        const abortController = new AbortController()

        const executeFetch = async () => {
            try {
                setIsLoading(true)
                setErrorMessage(null)

                const response = await fetch(url, { signal: abortController.signal })
                if (!response.ok) {
                    throw new Error(`Permintaan gagal dengan status ${response.status}`)
                }

                const parsedJson = (await response.json()) as TData
                setData(parsedJson)
            } catch (error) {
                if (abortController.signal.aborted) return
                setErrorMessage(
                    error instanceof Error ? error.message : "Gagal memuat data dari server.",
                )
            } finally {
                if (!abortController.signal.aborted) {
                    setIsLoading(false)
                }
            }
        }

        void executeFetch()

        return () => {
            abortController.abort()
        }
    }, [url])

    return { data, isLoading, errorMessage }
}
