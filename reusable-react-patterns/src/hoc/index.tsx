import { GreetingWithLoading } from "./greeting"

/**
 * Demo HOC.
 *
 * @returns Komponen greeting yang dibungkus status loading.
 */
export default function Hoc() {
    return (
        <section className="panel">
            <h3 className="text-lg font-semibold text-blue-400">HOC (withLoading)</h3>
            <GreetingWithLoading name="React" loading={false} />
            <GreetingWithLoading name="React" loading />
        </section>
    )
}
