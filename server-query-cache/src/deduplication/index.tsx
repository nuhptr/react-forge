import { useQuery } from "@tanstack/react-query"

const getRandomNumber = () => Promise.resolve(Math.random())

/**
 * Demo deduplikasi: beberapa komponen memakai queryKey yang sama.
 *
 * @returns Angka acak dari cache bersama.
 */
export default function Deduplication() {
    const { data } = useQuery({ queryKey: ["randomNumber"], queryFn: getRandomNumber })
    return (
        <section className="panel" aria-label="Deduplication">
            <h3 className="text-lg font-semibold text-blue-400">Deduplication</h3>
            <p>Angka acak: {data?.toFixed(4) ?? "..."}</p>
        </section>
    )
}
