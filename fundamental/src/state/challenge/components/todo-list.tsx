import { useState, type ChangeEvent } from "react"

type TodoItem = {
   text: string
}

const TodoList = () => {
   // Initialize the state with an empty array
   const [todos, setTodos] = useState<TodoItem[]>([])
   const [inputValue, setInputValue] = useState("")

   // Handle form submission to add a new todo item
   const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (inputValue.trim()) {
         setTodos([...todos, { text: inputValue }])
         setInputValue("")
      }
   }

   // Handle input change
   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
   }

   return (
      <div>
         <h1>Todo List</h1>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               value={inputValue}
               onChange={handleChange}
               placeholder="Add a new todo"
            />
            <button type="submit">Add Todo</button>
         </form>

         <ul>
            {todos.map((todo, index) => (
               <li key={index}>{todo.text}</li>
            ))}
         </ul>
      </div>
   )
}

export default TodoList
