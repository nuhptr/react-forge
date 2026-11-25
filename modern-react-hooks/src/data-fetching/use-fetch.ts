import { useCallback, useEffect, useState } from "react"

export interface FetchState<T> {
    data: T | null
    loading: boolean
    error: string | null
}

/**
 * Custom hook untuk pengambilan data sederhana.
 *
 * Single Responsibility: hanya menangani siklus hidup fetch (loading, data, error);
 * presentasi ditanggalkan ke komponen pemanggil.
 * Dependency Inversion: URL diinjeksi sebagai parameter, bukan dikodekan kaku.
 */
export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    })

    const fetchData = useCallback(async () => {
        setState((prev) => ({ ...prev, loading: true, error: null }))
        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error(`Gagal mengambil data: ${res.statusText}`)
            }
            const data: T = await res.json()
            setState({ data, loading: false, error: null })
        } catch (error) {
            setState({
                data: null,
                loading: false,
                error: error instanceof Error ? error.message : "Terjadi kesalahan",
            })
        }
    }, [url])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return state
}
