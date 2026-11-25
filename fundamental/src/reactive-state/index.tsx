import BasicCounter from "./basic-counter"
import ImmutableArrays from "./immutable-arrays"
import ModelObject from "./model-object"
import ObjectCollections from "./object-collections"
import SharedState from "./shared-state"
import StateInitializers from "./state-initializers"

/**
 * Menggabungkan contoh materi pengelolaan state (`useState`) sebelum masuk ke halaman latihan.
 *
 * @returns Ringkasan submodul materi `reactive-state`.
 */
const ReactiveState = () => {
    return (
        <main>
            <BasicCounter />
            <ImmutableArrays />
            <ModelObject />
            <ObjectCollections />
            <SharedState />
            <StateInitializers />
        </main>
    )
}

export default ReactiveState
