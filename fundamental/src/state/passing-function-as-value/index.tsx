import LazyCounter from "./components/lazy-counter"
import PersistentNameForm from "./components/persistent-name-form"
import RandomNumberGenerator from "./components/random-number-generator"

/**
 * Showcases three progressively practical patterns for passing initializer functions to `useState`:
 * 1. Static lazy initializer (`LazyCounter`)
 * 2. Random value initializer (`RandomNumberGenerator`)
 * 3. `localStorage` hydration initializer (`PersistentNameForm`)
 *
 * @returns Composed lazy-initializer examples.
 */
const PassingFunctionAsState = () => {
    return (
        <section>
            <LazyCounter />
            <RandomNumberGenerator />
            <PersistentNameForm />
        </section>
    )
}

export default PassingFunctionAsState
