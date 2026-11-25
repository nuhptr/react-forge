export interface User {
    id: number
    name: string
}

/**
 * Presentational component: murni menampilkan data yang diterima.
 *
 * Single Responsibility: tidak tahu dari mana data berasal.
 */
const UserList = ({ users }: { users: User[] }) => (
    <section className="panel" aria-label="Daftar pengguna">
        <h3 className="text-lg font-semibold text-blue-400">Container / Presentational</h3>
        <ul className="grid gap-1">
            {users.map((user) => (
                <li key={user.id} className="rounded border border-slate-700 p-2">
                    {user.name}
                </li>
            ))}
        </ul>
    </section>
)

export default UserList
