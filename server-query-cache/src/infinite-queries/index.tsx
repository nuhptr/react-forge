import { useInfiniteQuery } from "@tanstack/react-query"

const fetchPage = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=3`,
    )
    if (!res.ok) throw new Error("Gagal memuat halaman")
    return res.json()
}

/**
 * Demo infinite query dengan getNextPageParam.
 *
 * @returns Daftar halaman dan tombol muat lagi.
 */
export default function InfiniteQueries() {
    const query = useInfiniteQuery({
        queryKey: ["posts"],
        queryFn: fetchPage,
        initialPageParam: 1,
        getNextPageParam: (_last, pages) => pages.length + 1,
    })

    return (
        <section className="panel" aria-label="Infinite queries">
            <h3 className="text-lg font-semibold text-blue-400">Infinite Queries</h3>
            <p>{query.data?.pages.flat().length ?? 0} post dimuat</p>
            <button
                type="button"
                className="btn"
                onClick={() => query.fetchNextPage()}
                disabled={!query.hasNextPage}>
                Muat lagi
            </button>
        </section>
    )
}
