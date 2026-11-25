import type { ComponentType } from "react"

import CacheBasics from "./cache-basics"
import Deduplication from "./deduplication"
import FetchFromMultipleEndpoints from "./fetch-from-multiple-endpoints"
import FetchOneItem from "./fetch-one-item"
import InfiniteQueries from "./infinite-queries"
import MutatingData from "./mutation"
import Pagination from "./pagination"
import QueryClient from "./query-client"
import RaceCondition from "./race-condition"
import RefetchInterval from "./refetch-interval"
import StaleTime from "./stale-time"
import WithoutTanstackQuery from "./without-tanstack-query"
import WithTanstackQuery from "./with-tanstack-query"

/** Kontrak satu entri katalog modul. */
export interface Demo {
    id: string
    title: string
    description: string
    Component: ComponentType
}

/**
 * Katalog 13 topik TanStack Query berurutan abjad (A-Z).
 *
 * Single Responsibility: hanya mendefinisikan daftar modul.
 */
export const demos: Demo[] = [
    {
        id: "cache-basics",
        title: "Cache Basics",
        description: "Konsep cache server-state.",
        Component: CacheBasics,
    },
    {
        id: "deduplication",
        title: "Deduplication",
        description: "Request sama digabung via queryKey.",
        Component: Deduplication,
    },
    {
        id: "fetch-from-multiple-endpoints",
        title: "Multiple Endpoints",
        description: "Beberapa query independen.",
        Component: FetchFromMultipleEndpoints,
    },
    {
        id: "fetch-one-item",
        title: "Fetch One Item",
        description: "Query dinamis per ID.",
        Component: FetchOneItem,
    },
    {
        id: "infinite-queries",
        title: "Infinite Queries",
        description: "Muat halaman bertahap.",
        Component: InfiniteQueries,
    },
    {
        id: "mutation",
        title: "Mutation",
        description: "useMutation + invalidasi cache.",
        Component: MutatingData,
    },
    {
        id: "pagination",
        title: "Pagination",
        description: "Halaman yang bisa diganti.",
        Component: Pagination,
    },
    {
        id: "query-client",
        title: "Query Client",
        description: "QueryClientProvider + useQuery.",
        Component: QueryClient,
    },
    {
        id: "race-condition",
        title: "Race Condition",
        description: "queryKey per ID mencegah tabrakan.",
        Component: RaceCondition,
    },
    {
        id: "refetch-interval",
        title: "Refetch Interval",
        description: "Refetch otomatis berkala.",
        Component: RefetchInterval,
    },
    {
        id: "stale-time",
        title: "Stale Time",
        description: "Mengatur data segar/stale.",
        Component: StaleTime,
    },
    {
        id: "without-tanstack-query",
        title: "Without TanStack Query",
        description: "Fetch manual dengan useEffect.",
        Component: WithoutTanstackQuery,
    },
    {
        id: "with-tanstack-query",
        title: "With TanStack Query",
        description: "Fetch dengan useQuery.",
        Component: WithTanstackQuery,
    },
]
