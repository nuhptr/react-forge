interface User {
    name: string
}

/**
 * Komponen terdalam menerima props dari atas (prop drilling).
 */
const DeepChild = ({ user }: { user: User }) => (
    <p className="rounded border border-slate-700 p-2">Halo, {user.name}!</p>
)

const Middle = ({ user }: { user: User }) => <DeepChild user={user} />

/**
 * Demo prop drilling.
 *
 * @returns Pesan dari komponen terdalam.
 */
export default function PropDrilling() {
    return (
        <section className="panel" aria-label="Prop drilling">
            <h3 className="text-lg font-semibold text-blue-400">Prop Drilling</h3>
            <Middle user={{ name: "React Native" }} />
        </section>
    )
}
