import { useState } from "react"

const ExampleOne = () => {
   const initialCount = () => {
      // This function will only run on the initial render
      const initial = 10
      return initial
   }

   // Use a function to compute the initial state
   const [count, setCount] = useState(initialCount)

   const increment = () => {
      // Math.max prevent value from < 0
      setCount((prev) => Math.max(0, prev + 1))
   }

   return (
      <div>
         <h1>Count: {count}</h1>
         <button onClick={increment}>Increment</button>
      </div>
   )
}

export default ExampleOne
