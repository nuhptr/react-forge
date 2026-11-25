import { useQuery } from "@tanstack/react-query"

const fetchTime = async () => ({ time: new Date().toLocaleTimeString() })

/**
 * Demo refetch berkala.
 *
 * @returns Waktu yang diperbarui tiap 3 detik.
 */
export default function RefetchInterval() {
    const query = useQuery({ queryKey: ["time"], queryFn: fetchTime, refetchInterval: 3000 })

    return (
        <section className="panel" aria-label="Refetch interval">
            <h3 className="text-lg font-semibold text-blue-400">Refetch Interval</h3>
            <p>Waktu server: {query.data?.time}</p>
        </section>
    )
}
