import { useState } from "react"

import CompOne from "./comp-one"
import CompTwo from "./comp-two"

const SharingState = () => {
   const [count, setCount] = useState(0)

   const handleClick = (value: number) => {
      setCount((currentCount) => currentCount + value)
   }

   return (
      <section>
         <CompOne count={count} onClickHandler={() => handleClick(1)} />
         <CompTwo count={count} onClickHandler={() => handleClick(1)} />
      </section>
   )
}

export default SharingState
