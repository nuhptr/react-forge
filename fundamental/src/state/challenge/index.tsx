import Counter from "./components/counter"
import Profile from "./components/profile"
import ShoppingList from "./components/shopping-list"
import TodoList from "./components/todo-list"

/**
 * Aggregates all four `useState` practice challenges (`Counter`, `Profile`,
 * `ShoppingList`, and `TodoList`) into a single view.
 *
 * @returns Composed state challenges page.
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
