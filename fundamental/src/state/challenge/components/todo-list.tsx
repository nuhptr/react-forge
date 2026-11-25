import { useId, useState, type ChangeEvent, type SubmitEvent } from "react"

/**
 * Represents a single todo task with a stable unique identifier.
 */
interface TodoItem {
    id: string
    text: string
}

/**
 * State challenge 4: controlled todo list form appending new tasks with stable UUID keys.
 *
 * @returns Todo list manager component.
 */
const TodoList = () => {
    const todoInputId = useId()
    const [todos, setTodos] = useState<TodoItem[]>([])
    const [todoText, setTodoText] = useState("")

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const trimmedText = todoText.trim()
        if (!trimmedText) return

        setTodos((prevTodos) => [...prevTodos, { id: crypto.randomUUID(), text: trimmedText }])
        setTodoText("")
    }

    const handleTodoTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.target.value)
    }

    return (
        <div>
            <h2>Todo List</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor={todoInputId}>New Todo: </label>
                <input
                    id={todoInputId}
                    type="text"
                    value={todoText}
                    onChange={handleTodoTextChange}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
