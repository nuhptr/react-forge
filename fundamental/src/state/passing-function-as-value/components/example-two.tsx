import { useState } from "react"

const ExampleTwo = () => {
   const randomFunction = () => {
      return Math.floor(Math.random() * 100)
   }

   const [randomNumber, setRandomNumber] = useState(randomFunction)

   const generateRandomNumber = () => {
      const newNumber = randomFunction()
      setRandomNumber(newNumber)
   }

   return (
      <div>
         <h1>Random number: {randomNumber}</h1>
         <button onClick={generateRandomNumber}>Generate random number</button>
      </div>
   )
}

export default ExampleTwo
