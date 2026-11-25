import { Suspense } from "react"
import { TodoFetchClassic } from "./classic-effect"
import { TodoFetchReactNineteen } from "./react-nineteen"

/**
 * Demo pengambilan data: membandingkan `useEffect` klasik dengan React 19 `use()`.
 */
export default function DataFetching() {
    return (
        <div className="demo-group" aria-label="Perbandingan pengambilan data">
            <section className="demo-half">
                <h4>Klasik (useEffect)</h4>
                <TodoFetchClassic />
            </section>

            <section className="demo-half">
                <h4>React 19 use()</h4>
                <Suspense fallback={<p className="loading">Memuat dengan Suspense...</p>}>
                    <TodoFetchReactNineteen />
                </Suspense>
            </section>
        </div>
    )
}
