import LazyCounter from "./components/lazy-counter"
import PersistentNameForm from "./components/persistent-name-form"
import RandomNumberGenerator from "./components/random-number-generator"

/**
 * Menampilkan tiga pola bertahap penerusan fungsi inisialisasi ke `useState`:
 * 1. Inisialisasi nilai statis (`LazyCounter`)
 * 2. Inisialisasi nilai acak (`RandomNumberGenerator`)
 * 3. Hidrasi data dari `localStorage` (`PersistentNameForm`)
 *
 * @returns Gabungan contoh penggunaan fungsi inisialisasi state.
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
