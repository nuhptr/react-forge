/**
 * Represents a user record displayed in {@link UserList}.
 */
interface User {
    id: number
    name: string
    age: number
}

const USERS: User[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
]

/**
 * Renders a collection of users mapped with stable `user.id` keys.
 *
 * @returns Unordered list of user entries.
 */
const UserList = () => {
    return (
        <ul>
            {USERS.map((user) => (
                <li key={user.id}>
                    <h2>Name: {user.name}</h2>
                    <p>Age: {user.age}</p>
                </li>
            ))}
        </ul>
    )
}

export default UserList
