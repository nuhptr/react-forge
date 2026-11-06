import { useState } from "react"

const Counter = () => {
   const [count, setCount] = useState(0)

   const increment = () => setCount(count + 1)
   const decrement = () => {
      if (count < 0) return 0
      else return count - 1
   }

   return (
      <div>
         <h1>Count</h1>
         <button onClick={increment}>+</button>
         <button onClick={decrement}>-</button>
      </div>
   )
}

export default Counter
