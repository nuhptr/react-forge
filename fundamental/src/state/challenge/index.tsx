import Counter from "./components/counter"
import Profile from "./components/profile"
import ShoppingList from "./components/shopping-list"
import TodoList from "./components/todo-list"

/**
 * Menggabungkan keempat latihan `useState` (`Counter`, `Profile`,
 * `ShoppingList`, dan `TodoList`) ke dalam satu halaman.
 *
 * @returns Halaman kumpulan challenge state.
 */
const StateChallenge = () => {
    return (
        <main>
            <h1>State Challenges</h1>
            <Counter />
            <Profile />
            <ShoppingList />
            <TodoList />
        </main>
    )
}

export default StateChallenge
