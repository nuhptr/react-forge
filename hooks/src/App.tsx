import ReusableHooksChallenge from "./reusable-hooks/challenge"

/**
 * Komponen utama (playground) untuk workspace React Hooks.
 *
 * Ganti komponen yang dirender di bawah ini sesuai urutan folder A–Z:
 * - `./basic-state`
 * - `./effect-lifecycle` atau `./effect-lifecycle/challenge`
 * - `./layered-prop-drilling`
 * - `./managed-context` atau `./managed-context/challenge`
 * - `./reducer-dispatch` atau `./reducer-dispatch/challenge`
 * - `./reference-values` atau `./reference-values/challenge`
 * - `./reusable-hooks` atau `./reusable-hooks/challenge`
 * - `./unique-identifiers`
 *
 * @returns Komponen materi hook yang sedang aktif ditampilkan.
 */
const App = () => {
    return <ReusableHooksChallenge />
}

export default App
