import { useState } from "react"

const Counter = () => {
   const [count, setCount] = useState<number>(0)

   const increment = () => setCount((currentCount) => currentCount + 1)
   const decrement = () => setCount((currentCount) => Math.max(0, currentCount - 1))

   return (
      <div>
         <p>You clicked {count} times</p>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
      </div>
   )
}

export default Counter
